import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./AlbumListLayout.js";
import Modal from "./Modal.tsx";
import SelectAmount from "../SelectAmount.tsx";
import LoadingComponent from "../LoadingComponent.tsx";
import SearchBar from "../SearchBar.tsx";
import { fetchDataFromApi } from "../service/ApiConntection.tsx";

export default function AlbumList({ data, query, loading }: any) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query2, setQuery2] = useState(query)
  const [data2, setData2] = useState(data)
  const [loading2, setLoading2] = useState(loading)

  function searchItems(searchValue: string) {
    setSearchInput(searchValue);
    console.log(searchInput)
    if (searchInput !== "") {
      const filteredData = data2.filter((prop: any) => {
        return Object.values(prop["im:name"].label)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data2);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("apiData")
    if (storedData) {
      setData2(JSON.parse(storedData))
      setLoading2(!!!localStorage.getItem("loadingState"))
      setQuery2(localStorage.getItem("dataLength"))
    }
  }, [])

  return (
    <>
      <div className="flex">
        <SelectAmount data={data2} query={query2} onChange={(e: any) => setQuery2(e.target.value)} />
        <SearchBar onChange={searchItems}></SearchBar>
      </div>
      <LoadingComponent disp={loading2} />
      {loading2 ? undefined : searchInput.length > 1
        ? filteredResults.slice(0, +query2).map((prop, index) => {
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
        : data2.slice(0, +query2).map((prop: any, index: number) => (
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
