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

  return (
    <>
      <label htmlFor={title}>{children}</label>

      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box truncate">
          <center><img className="lg:w-80" src={imageModal} alt="" /></center>
          <div className="divider text-sm sm:text-lg font-semibol truncate">{title.length > 20 ? title.slice(0, 20) + ".." : title} - {artist.length > 15 ? artist?.slice(0, 15) + ".." : artist}</div>
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
