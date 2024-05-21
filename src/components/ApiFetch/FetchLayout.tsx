type FetchL = {
  index?: number;
  image?: string;
  title?: string;
  artist?: string;
};

const FetchLayout: React.FC<FetchL> = ({ index, image, title, artist }) => {
  return (
    <div className="flex flex-row border-2 gap-5 border-solid border-black">
      <p className="content-center ml-6">{index}</p>
      <div className=""></div>
      <img src={image} alt="" />
      <p>
        {title} - {artist}
      </p>
      {/*<p></p>
                <p></p>*/}
    </div>
  );
};

export default FetchLayout;
