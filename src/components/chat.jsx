import { PaperAirplaneIcon, StopIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Message from "./message";

export default function Chat() {
  const avatar = "https://game.gtimg.cn/images/lol/act/img/champion/Annie.png";

  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [isReady, setIsReady] = useState(false);

  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  const [messages, setMessages] = useState([]);

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

  const send = async (messages, words, index) => {
    return new Promise(async (resolve, reject) => {
      const newMessages = [...messages];
      newMessages[newMessages.length - 1].answer =
        newMessages[newMessages.length - 1].answer + words[index];
      setMessages(newMessages);
      // resolve(true);

      const next = index + 1;
      if (words.length < next + 1) {
        newMessages[newMessages.length - 1].pending = false;
        setMessages(newMessages);
        console.log("Resolve:", true);
        resolve(true);
        setPending(false);
        return;
      }

      setTimeout(async () => {
        await send(messages, words, next);
      }, 500);
    });
  };

  // sendTest
  const sendData = async (messages) => {
    return send(
      messages,
      [
        "这",
        "是",
        "一条",
        "测试",
        "阿萨德合法水电费",
        "ASDFASDFASDFASDF",
        "。",
      ],
      0
    );
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
      await sendData(newMessages);
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
                    <Combobox.Button className="border border-gray-700 text-gray-400 text-sm hover:bg-gray-600 active:bg-gray-700 focus:outline-none ">
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
