import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

export default function Message(props) {
  const question = props.question || "";
  const answer = props.answer || "";
  const pending = props.pending;
  const avatar = props.avatar || "";
  const index = props.index;

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
            <div className="flex flex-col">{question}</div>
          </div>
        </div>
        <div className="flex flex-col w-10"></div>
      </div>
      <div className="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col w-[48] pr-4">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                src="/xiang-fav.svg"
                alt=""
              />
            </div>
            <div className="answer">
              {answer}

              <span
                className={`inline-block ${
                  pending ? "" : "hidden"
                }  bg-white w-1.5 h-3 ml-1.5 animate-ping`}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10">
          <div className={pending ? "hidden" : ""}>
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
