import Header from "../components/header";
import Footer from "../components/footer";
import SearchInput from "../components/search-input";
import Items from "../components/items";
import Pagination from "../components/pagination";

export default function List() {
  return (
    <div className="container mx-auto bg-white">
      <Header active="/search" />

      <div className="mx-auto max-w-screen-2xl px-10 pt-28">
        <div className="h-20">
          <SearchInput />
        </div>
        <Items />
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
