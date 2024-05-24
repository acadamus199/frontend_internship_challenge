type Mod = {
  children: any,
  imageModal?: string,
  title?: string,
  artist?: string,
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
        <div className="modal-box">
          <center><img className="lg:w-80" src={imageModal} alt="" /></center>
          <div className="divider text-lg font-semibold">{title} - {artist}</div>
          <p className="py-4">Count: {itemCount} / {price} {priceCurrency}</p>
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
