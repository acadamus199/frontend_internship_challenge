import { useState } from "react";

type Mod = {
  children: any,
  imageModal?: string,
  title: string,
  artist: string,
  price?: string,
  priceCurrency?: string
  itemCount?: string
  releaseDate?: string
};

const Modal: React.FC<Mod> = ({ children, imageModal, title, artist, price, priceCurrency, itemCount, releaseDate }) => {
  const [show, setShow] = useState<any>(title.length > 20 ? title.slice(0, 20) + ".." : title);
  const [art, setArt] = useState<any>(artist.length > 15 ? artist?.slice(0, 15) + ".." : artist)
  const [divid, setDivid] = useState<string>("divider")

  return (
    <>
      <label htmlFor={title}>{children}</label>

      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box truncate">
          <center><img className="lg:w-80" src={imageModal} alt="" /></center>
          <center>
            <div onMouseEnter={() => { setShow(title); setArt(artist); setDivid("h-4 mt-3 mb-4") }} onMouseOut={() => { setShow(title.length > 20 ? title.slice(0, 20) + ".." : title); setArt(artist.length > 15 ? artist?.slice(0, 15) + ".." : artist); setDivid("divider") }} className={`${divid} text-sm sm:text-lg font-semibol hover:animate-marquee`}>{show} - {art}</div>
          </center>
          <p className="py-4 text-sm sm:text-lg">Count: {itemCount} / {price} {priceCurrency}</p>
          <p>Date: {releaseDate}</p>
          <div className="modal-action">
            <label htmlFor={title} className="btn">Close</label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={title}>
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
