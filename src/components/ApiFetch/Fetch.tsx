import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./FetchLayout.js";
import Modal from "./Modal.tsx";

export default function Fetch() {
  const [data, setData] = useState<never[]>([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((info) => {
        setData(info.feed.entry);
      });
  }, []);
  return (
    <>
      <label className="input input-bordered ml-auto flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search"/>
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
      {data.slice(0, 30).map((prop, index) => (
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
