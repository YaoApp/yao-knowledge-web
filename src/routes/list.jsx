import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SearchInput from "../components/search-input";
import Items from "../components/items";
import Pagination from "../components/pagination";

export default function List() {
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({ items: [], total: 0 });
  const [pending, setPending] = useState(false);

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
    const res = await fetch(`/api/doc/search?question=${input}&page=${page}`);
    const data = await res.json();
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
