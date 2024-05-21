import { useEffect, useState } from "react";
import { JSON_NAMES } from "../../../json_names.tsx";
import FetchLayout from "./FetchLayout.js";

export default function Fetch() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((info) => {
        setData(info.feed.entry);
      });
  }, []);
  return (
    <>
      {data.slice(0,5).map((prop, index) => (
        <>
          <FetchLayout
            key={JSON_NAMES.title(prop)}
            index={index+1}
            title={JSON_NAMES.title(prop)}
            artist={JSON_NAMES.artist(prop)}
            image={JSON_NAMES.image(prop, 1)} //JSON can only have index from 0-2
          ></FetchLayout>
        </>
      ))}
    </>
  );
}
