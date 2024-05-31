import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./FetchLayout.js";
import Modal from "./Modal.tsx";
import SelectAmount from "./SelectAmount.tsx";
import LoadingComponent from "../LoadingComponent.tsx";

export default function Fetch() {
  const [data, setData] = useState<never[]>([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((info) => {
        setData(info.feed.entry);
        setQuery(info.feed.entry.length);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((prop: any) => {
        return Object.values(prop["im:name"].label)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };
  function SelectLimiter(e: any) {
    setQuery(e)
  }

  return (
    <>
      <div className="flex">
        <SelectAmount data={data} query={query} onChange={(e: any) => SelectLimiter(e.target.value)} />
        {/* SearchBar */}
        <label className="input input-bordered flex items-center gap-2 w-64 ml-auto m-5 mb-0">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => {
              searchItems(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <LoadingComponent disp={loading} />
      {loading ? undefined : searchInput.length > 1
        ? filteredResults.slice(0, +query).map((prop, index) => {
          return (
            <Modal
              key={JSON_NAMES.title(prop)}
              title={JSON_NAMES.title(prop)}
              artist={JSON_NAMES.artist(prop)}
              imageModal={JSON_NAMES.image(prop, 2)}
              price={JSON_NAMES.price(prop)}
              priceCurrency={JSON_NAMES.priceCurrency(prop)}
              itemCount={JSON_NAMES.itemCount(prop)}
              releaseDate={JSON_NAMES.releaseDate(prop)}
            >
              <FetchLayout
                index={index + 1}
                title={JSON_NAMES.title(prop)}
                artist={JSON_NAMES.artist(prop)}
                image={JSON_NAMES.image(prop, 1)} //JSON can only have index from 0-2
              ></FetchLayout>
            </Modal>
          );
        })
        : data.slice(0, +query).map((prop, index) => (
          <>
            <Modal
              title={JSON_NAMES.title(prop)}
              artist={JSON_NAMES.artist(prop)}
              imageModal={JSON_NAMES.image(prop, 2)}
              price={JSON_NAMES.price(prop)}
              priceCurrency={JSON_NAMES.priceCurrency(prop)}
              itemCount={JSON_NAMES.itemCount(prop)}
              releaseDate={JSON_NAMES.releaseDate(prop)}
            >
              <FetchLayout
                key={JSON_NAMES.title(prop)}
                index={index + 1}
                title={JSON_NAMES.title(prop)}
                artist={JSON_NAMES.artist(prop)}
                image={JSON_NAMES.image(prop, 1)} //JSON can only have index from 0-2
              ></FetchLayout>
            </Modal>
          </>
        ))}
    </>
  );
}
