import React, { useEffect, useRef, useState } from "react";
import Pagination from "../components/pagination";

export default function Items(props) {
  const data = props.data || { items: [], total: 0 };
  return (
    <>
      <div className={`mx-auto max-w-2xl lg:mx-0 ${props.pending || "hidden"}`}>
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>

      <div
        className={`mx-auto max-w-2xl lg:mx-0 ${
          (data.items.length == 0 && !props.pending) || "hidden"
        }`}
      >
        <p className="mt-2 text-lg leading-8 text-gray-600">
          共找到 0 条符合条件的结果
        </p>
      </div>

      <div
        className={`bg-white py-4 sm:py-4  ${
          (data.items.length > 0 && !props.pending) || "hidden"
        }`}
      >
        <div className="mx-auto ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              搜索结果
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              共找到 {data.total} 条符合条件的结果
            </p>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.items.map((item) => (
              <article
                key={item.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={item.lastUpdateTimeUnix}
                    className="text-gray-500"
                  >
                    {item.lastUpdateTimeUnix}
                  </time>
                  <a
                    href={item.url}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {item.type}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={item.url}>
                      <span className="absolute inset-0" />
                      {item.summary}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.content}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 hidden">
                  <img
                    src=""
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={item.url}>
                        <span className="absolute inset-0" />
                        {item.user}
                      </a>
                    </p>
                    <p className="text-gray-600">CEO</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Pagination
            pages={data.pages}
            page={data.curr}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </>
  );
}
