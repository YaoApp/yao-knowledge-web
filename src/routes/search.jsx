import Header from "../components/header";
import SearchInput from "../components/search";

export default function Search() {
  return (
    <div className="container  m-0 h-screen w-screen max-w-full	bg-space bg-center bg-no-repeat	bg-cover">
      <Header color={"white"} />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
