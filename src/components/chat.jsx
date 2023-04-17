import { PaperAirplaneIcon, StopIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Link, useNavigate, redirect } from "react-router-dom";
import Message from "./message";

export default function Chat() {
  const navigate = useNavigate();
  const avatar = "https://game.gtimg.cn/images/lol/act/img/champion/Annie.png";
  const [pending, setPending] = useState(false);
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);
  const [input, setInput] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [eventSource, seteventSource] = useState(null);

  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  const [messages, setMessages] = useState([]);

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

  // update scroll position
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    textareaRef.current.focus();
  }, [messages, pending]);

  // update textarea height
  useEffect(() => {
    textareaRef.current.style.height = "56px";
    if (textareaRef.current.value != "") {
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
    if (textareaRef.current.value.trim() != "") {
      setIsReady(true);
      return;
    }

    setIsReady(false);
  }, [input]);

  // send message
  const fetchData = async (messages) => {
    return new Promise((resolve, reject) => {
      const es = new EventSource(
        `/api/chat/stream?question=${encodeURIComponent(
          messages[messages.length - 1].question
        )}&token=${encodeURIComponent(token)}`
      );

      seteventSource(es);
      es.onopen = () => {
        console.log("Connected to server");
      };

      es.onmessage = (event) => {
        if (event.data != "" && event.data != null && event.data != "[DONE]") {
          const data = JSON.parse(event.data);
          let word =
            data.choices && data.choices.length > 0
              ? data.choices[0].delta.content
              : "";

          if (event.data == "") {
            word = "\n";
          }

          if (word) {
            const newMessages = [...messages];
            newMessages[newMessages.length - 1].answer =
              newMessages[newMessages.length - 1].answer + word;
            setMessages(newMessages);
          }
        } else if (event.data == "[DONE]") {
          const newMessages = [...messages];
          newMessages[newMessages.length - 1].pending = false;
          setMessages(newMessages);
          setPending(false);
          resolve(true);
          return;
        }
      };

      es.onerror = (event) => {
        console.log(event.message);

        es.close();
        const newMessages = [...messages];
        newMessages[newMessages.length - 1].pending = false;
        setMessages(newMessages);
        setPending(false);
        // setLogin(true);
        resolve(true);
      };

      return () => {
        const newMessages = [...messages];
        newMessages[newMessages.length - 1].pending = false;
        setMessages(newMessages);
        setPending(false);
        resolve(true);
        es.close();
      };
    });
  };

  // push message
  const pushMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
    return newMessages;
  };

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleStop = async (e) => {
    try {
      eventSource.close();
    } catch (err) {
      console.log("===eventSource", eventSource, err);
    }

    console.log(eventSource);

    const newMessages = [...messages];
    newMessages[newMessages.length - 1].pending = false;
    setMessages(newMessages);
    setPending(false);
  };

  const handleSubmit = async (e) => {
    if (!isReady) {
      return;
    }

    setPending(true);
    const message = {
      avatar: avatar,
      question: input,
      answer: "",
      pending: true,
    };

    setInput("");
    const newMessages = pushMessage(message);
    try {
      await fetchData(newMessages);
      console.log("===Pending", pending);
    } catch (err) {
      // somting error
      console.log("===Pending", err);
    }

    setPending(false);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto rounded-lg w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 h-[80vh] text-gray-300">
        <div
          className="overflow-x-hidden overflow-y-auto scrollbar-macos scroll-smooth h-5/6 max-h-5/6"
          ref={scrollRef}
        >
          {messages.map((message, index) => (
            <Message {...message} index={index} key={index} />
          ))}
        </div>

        {/* <!-- Sendbox --> */}
        <div className="relative top-6 text-center">
          <Combobox className="w-2/3 mx-auto">
            <div className="relative mt-24">
              <div className="w-full justify-end cursor-default overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <div className="w-full h-auto absolute bottom-0 text-center">
                  <Combobox
                    className={`w-auto mx-auto px-2.5 py-2 rounded-md mb-1 ${
                      pending ? "" : "invisible"
                    }`}
                  >
                    <Combobox.Button
                      onClick={handleStop}
                      className="border border-gray-700 text-gray-400 text-sm hover:bg-gray-600 active:bg-gray-700 focus:outline-none "
                    >
                      <StopIcon
                        className="inline-block h-5 w-5 text-gray-400 mr-1"
                        aria-hidden="true"
                      />
                      点击停止生成...
                    </Combobox.Button>
                  </Combobox>

                  <textarea
                    className="w-full bg-gray-900 b-20 mt-1 h-12 rounded-lg shadow-md leading-6 resize-none border-none py-4 pl-4 pr-10 text-base leading-5 text-gray-300 h-14 focus:ring-0 focus:outline-none"
                    placeholder="请输入你的问题..."
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    ref={textareaRef}
                    disabled={pending}
                  />

                  <Combobox.Button
                    className="absolute inset-y-0 right-0 mt-10 flex items-center pr-4"
                    onClick={handleSubmit}
                    disabled={!isReady || pending}
                  >
                    <PaperAirplaneIcon
                      className={`h-5 w-5 ${
                        !isReady || pending ? "text-gray-600" : "text-gray-400"
                      }`}
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
              </div>
            </div>
          </Combobox>
          <div className="w-2/3 mx-auto text-sm text-right text-gray-700 mt-2">
            使用 ctrl/cmd + enter 发送
          </div>
        </div>
      </div>
    </>
  );
}
