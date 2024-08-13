import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./AlbumListLayout.js";
import Modal from "./Modal.tsx";
import SelectAmount from "../SelectAmount.tsx";
import LoadingComponent from "../LoadingComponent.tsx";
import SearchBar from "../SearchBar.tsx";

export default function AlbumList({ data, query, loading }: any) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // TODO: [6] Tutaj "query2" to tak naprawdę ilość albumów na stronę, więc proponuję semantyczną nazwę, np. pageAlbumsAmount
  // ::::: Tym bardziej, że po przeniesieniu fetchowania albumów do tego komponentu, będziesz też miał tutaj "allAlbumsAmount"
  const [query2, setQuery2] = useState(query)
  // TODO: [7] Ten 2 zduplikowane states też będą mogły być wywalone po przeniesieniu fetchowania tutaj
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

  // TODO: [8] Też do usunięcia po przeniesieniu fetchowania tutaj
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
      {/* TODO: [9] Usuń zduplikowany kod <Modal>...</Modal> */}
      {/* ::::: Nie musisz raz wyświetlasz wszystkie albumy, a raz przefiltrowane */}
      {/* ::::: Możesz wyświetlać tylko filteredData, czyli po prostu przypisywać mu wszystkie albumy jeśli nie nic wpisane w searchbar */}
      {loading2 ? null : searchInput.length > 1
        ? filteredResults.slice(0, +query2).map((prop, index) => {
          return (
            <Modal
              key={`${JSON_NAMES.title(prop)}-${index}`}
              title={JSON_NAMES.title(prop)}
              artist={JSON_NAMES.artist(prop)}
              imageModal={JSON_NAMES.image(prop, 2)}
              price={JSON_NAMES.price(prop)}
              priceCurrency={JSON_NAMES.priceCurrency(prop)}
              itemCount={JSON_NAMES.itemCount(prop)}
              releaseDate={JSON_NAMES.releaseDate(prop)}
              link={JSON_NAMES.link(prop)}
            >
              {/*TODO: [10] "Layout" (podobnie jak "page") też ma swoje konkretne przeznaczenie*/}
              {/*::::: To jest component przechowujący TYLKO layout, czyli jedyne co do niego przekazujesz to children*/}
              {/*::::: (W sumie tak jak na przykład masz w Body.tsx. To jest idealny przykład layoutu)*/}
              {/*::::: Tutaj masz zwykły komponent, bo przekazujesz mu dane i coś z nimi robisz*/}
              {/*::::: Proponuję bardziej semantyczną nazwę, np. ModalHandler.tsx */}
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
          <Modal
            key={`${JSON_NAMES.title(prop)}-${index}`}
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
        ))}
    </>
  );
}
