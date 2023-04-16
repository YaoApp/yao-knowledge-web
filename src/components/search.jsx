import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate, redirect } from "react-router-dom";

export default function Search() {
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && input != "") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (event) => {
    setQuery(true);
  };

  useEffect(() => {
    if (query) {
      return navigate("/list?q=" + encodeURIComponent(input));
    }
  }, [query]);

  return (
    <div className="top-16 w-3/4 ">
      <Combobox>
        <div className="relative mt-1 ">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-4 pr-10 text-lg leading-5 text-gray-900 h-12 focus:ring-0"
              placeholder="请输入你的问题 按下回车"
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={handleSubmit}
            >
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Combobox>
    </div>
  );
}
