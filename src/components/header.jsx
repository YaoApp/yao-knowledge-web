import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header(props) {
  const color = props.color || "black";
  const active = props.active || "";
  const textClassName =
    color == "black"
      ? "text-sm font-medium leading-6 text-gray-900 px-3.5 py-2"
      : "text-sm font-medium leading-6 text-gray-100 px-3.5 py-2";

  const activeTextClassName =
    color == "black"
      ? "text-sm font-medium leading-6 text-gray-900 rounded-full bg-purple-950/10 px-3.5 py-2"
      : "text-sm font-medium leading-6 text-gray-100 rounded-full bg-white/10 px-3.5 py-2";

  const logoSrc = color == "black" ? "/xiang.svg" : "/xiang-w.svg";
  const navigation = [
    { name: "象传知识库", href: "/" },
    { name: "语义搜索", href: "/search" },
    { name: "聊天机器人", href: "/chat" },
    {
      name: "源码下载",
      href: "https://github.com/YaoApp/yao-knowledge",
      target: "blank",
    },
    { name: "YAO 应用引擎", href: "https://yaoapps.com", target: "blank" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-screen-2xl	"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://iqka.com" target="blank" className="-m-1.5 p-1.5">
            <span className="sr-only">象传智慧</span>
            <img className="h-16 w-auto" src={logoSrc} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打开</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target ? item.target : "_self"}
              className={
                item.href == active ? activeTextClassName : textClassName
              }
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/admin" className={textClassName}>
            登录 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">象传智慧</span>
              <img className="h-8 w-auto" src={logoSrc} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">关闭</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.target ? item.target : "_self"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/admin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  登录
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
