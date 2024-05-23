import Modal from "./Modal";

type FetchL = {
  index?: number;
  image?: string;
  title?: string;
  artist?: string;
};

const FetchLayout: React.FC<FetchL> = ({ index, image, title, artist }) => {
  return (
    <>
      <label htmlFor="my_modal_6">
        <div className="flex flex-row border-2 gap-5 border-solid border-black">
          <p className="content-center ml-6">{index}</p>
          <img src={image} alt={title} />
          <p>
            {title} - {artist}
          </p>
        </div>
        {/* The button to open modal */}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchLayout;
