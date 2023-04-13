import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

export default function Message(props) {
  const question = props.question || "";
  const answer = props.answer || "";
  const pending = props.pending;
  const avatar = props.avatar || "";
  const index = props.index;

  // const CodeBlock = ({ language, value }) => {
  //   console.log("CodeBlock", language, value);
  //   return (
  //     <pre tw="bg-gray-800 rounded p-4 my-4">
  //       <code
  //         tw="text-gray-200 block overflow-x-auto"
  //         className={`language-${language}`}
  //       >
  //         {value}
  //       </code>
  //     </pre>
  //   );
  // };

  // const renderers = {
  //   code: ({ language, value }) => {
  //     return (
  //       <SyntaxHighlighter
  //         language={language}
  //         style={coy}
  //         className="my-4 rounded-md shadow-md"
  //       >
  //         {value}
  //       </SyntaxHighlighter>
  //     );
  //   },
  //   table: ({ children }) => (
  //     <div className="overflow-x-auto">
  //       <table className="table-auto w-full">{children}</table>
  //     </div>
  //   ),
  // };

  // console.log(answer);

  return (
    <>
      <div className="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-t-lg">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col w-[48] mr-4">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                src={avatar}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <div className="prose prose-xiang max-w-full">
                <ReactMarkdown
                  className="inline-block"
                  children={question}
                  remarkPlugins={[gfm]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10"></div>
      </div>
      <div className="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col w-fit min-w-fit pr-4">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                src="/xiang-fav.svg"
                alt=""
              />
            </div>
            <div className="answer">
              <div className="prose prose-xiang max-w-full">
                <ReactMarkdown
                  className="inline-block"
                  children={answer}
                  remarkPlugins={[gfm]}
                />
                <span
                  className={`inline-block ${
                    pending ? "" : "hidden"
                  }  bg-white w-1.5 h-3 ml-1.5 animate-ping`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit min-w-fit w-10">
          <div className={pending ? "hidden" : "hidden"}>
            <HandThumbUpIcon
              className={`inline-block cursor-pointer h-4 w-4 hover:text-purple-600 mr-2`}
            />
            <HandThumbDownIcon
              className={`inline-block cursor-pointer h-4 w-4 hover:text-purple-600`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
