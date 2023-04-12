import Header from "../components/header";
import ChatBox from "../components/chat";

export default function Chat() {
  return (
    <div className="container  m-0 h-screen w-screen max-w-full	bg-hacker bg-center bg-no-repeat	bg-cover">
      <Header color={"white"} active="/chat" />
      <div className="mx-auto max-w-screen-2xl px-20 pt-28">
        <ChatBox />
      </div>
    </div>
  );
}
