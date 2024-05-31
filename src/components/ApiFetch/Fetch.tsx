import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./FetchLayout.js";
import Modal from "./Modal.tsx";
import SelectAmount from "./SelectAmount.tsx";
import LoadingComponent from "../LoadingComponent.tsx";
import SearchBar from "../SearchBar.tsx";

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
        setLoading(false)
      });
  }, []);

  function searchItems(searchValue: string) {
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

  return (
    <>
      <div className="flex">
        <SelectAmount data={data} query={query} onChange={(e: any) => setQuery(e.target.value)} />
        <SearchBar onChange={searchItems}></SearchBar>
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
              link={JSON_NAMES.link(prop)}
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
              link={JSON_NAMES.link(prop)}
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
