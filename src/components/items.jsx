import React, { useEffect, useRef, useState } from "react";
import Pagination from "../components/pagination";

export default function Items(props) {
  const data = props.data || { data: [], total: 0 };
  return (
    <>
      <div className={`mx-auto max-w-2xl lg:mx-0 ${props.pending || "hidden"}`}>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>

      <div
        className={`mx-auto max-w-2xl lg:mx-0 ${
          (data.data && data.data.length == 0 && !props.pending) || "hidden"
        }`}
      >
        <p className="mt-2 text-lg leading-8 text-gray-600">
          共找到 0 条符合条件的结果
        </p>
      </div>

      <div
        className={`bg-white py-4 sm:py-4  ${
          (data.data && data.data.length > 0 && !props.pending) || "hidden"
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
            {data.data.map((item) => (
              <article
                key={item.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={item.lastUpdateTimeUnix}
                    className="text-gray-500"
                  >
                    {
                      new Date(parseInt(item.lastUpdateTimeUnix))
                        .toISOString()
                        .split("T")[0]
                    }
                  </time>
                  <a
                    href={`/api/doc/download/${item.path}`}
                    target="_blank"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {item.type}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {item.name} (片段:{item.part + 1})
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 h-20">
                    {item.content.length > 80
                      ? item.content.substring(0, 80) + "..."
                      : item.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Pagination
            pages={data.pagecnt}
            page={data.page}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </>
  );
}
