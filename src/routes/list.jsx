import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SearchInput from "../components/search-input";
import Items from "../components/items";
import Pagination from "../components/pagination";
import { Routes, useNavigate, useLocation } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({ data: [], total: 0 });
  const [pending, setPending] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q") || "";
  const [input, setInput] = useState(q);
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);

  // check login
  useEffect(() => {
    if (login) {
      navigate("/signin");
      return;
    }

    const userData = sessionStorage.getItem("login");
    if (!userData) {
      navigate("/signin");
      return;
    }

    const user = JSON.parse(userData);
    const now = Math.floor(Date.now() / 1000);
    if (user.expires_at - now <= 0) {
      navigate("/signin");
      return;
    }

    setToken(user.token);
  }, [login]);

  useEffect(() => {
    if (q == "") return;
    fetchData(1);
  }, [q]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && input != "") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const fetchData = async (page) => {
    setPending(true);

    const userData = sessionStorage.getItem("login");
    if (!userData) {
      setLogin(true);
      return;
    }

    const user = JSON.parse(userData);
    const now = Math.floor(Date.now() / 1000);
    if (user.expires_at - now <= 0) {
      setLogin(true);
      return;
    }

    const res = await fetch(`/api/doc/search?question=${input}&page=${page}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const data = await res.json();
    if (data && data.code && data.message) {
      setPending(false);
      setLogin(true);
      return;
    }

    setResult(data);
    setPending(false);
  };

  const handleSubmit = async () => {
    fetchData(1);
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };

  return (
    <div className="container mx-auto bg-white">
      <Header active="/search" />

      <div className="mx-auto max-w-screen-2xl px-10 pt-28">
        <div className="h-20">
          <SearchInput
            pending={pending}
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            onSubmit={handleSubmit}
            value={input}
          />
        </div>
        <Items
          data={result}
          pending={pending}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
