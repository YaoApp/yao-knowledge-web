import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logined, setLogined] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const back = queryParams.get("back") || "/chat";
  const navigate = useNavigate();

  useEffect(() => {
    if (logined) {
      return navigate(back);
    }
  }, [logined]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    if (data && data.message && data.code) {
      setMessage(data.message);
      setAlert(true);
      return;
    }

    sessionStorage.setItem("login", JSON.stringify(data));
    setLogined(true);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-24">
          <div>
            <a href="/">
              <img
                className="mx-auto h-20 w-auto"
                src="/xiang.svg"
                alt="Your Company"
              />
            </a>
            <h2 className="mt-16 text-center text-3xl font-bold tracking-tight text-gray-900">
              用户登录
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              可在{" "}
              <a
                href="/admin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                管理后台
              </a>{" "}
              添加用户
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div
              className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${
                alert || "hidden"
              }`}
              role="alert"
            >
              <strong class="font-bold">{message}</strong>
              <span
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={() => setAlert(false)}
              >
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  邮箱
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="输入用户邮箱"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="passowrd"
                  type="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="输入登录密码"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                用户登录
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
