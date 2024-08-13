type FetchL = {
  index?: number;
  image?: string;
  title: string;
  artist?: string;
};

// TODO: [22] To jest komponent, więc nazwa pliku powinna być taka sama jak nazwa funkcji którą zwraca
// ::::: (w TODO: [10] wyjaśniłam czemu proponuję Modalhandler)
const FetchLayout: React.FC<FetchL> = ({ index, image, title, artist }) => {
  function capitalizeFirst(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="flex flex-row gap-5 m-3 border-2 p-1 cursor-pointer transition-all ease-in-out hover:-translate-x-2 hover:bg-slate-100 truncate" >
        <div className="place-content-center sm:ml-10">
          <p className="sm:pl-1 sm:w-8 pl-1 w-8 h-8 italic bg-slate-300 border-4 rounded-full">
            {index}
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <img src={image} alt={title} />
        <div className="flex-col">
          <p className="content-center text-xl font-semibold truncate">{title}</p>
          <p className="opacity-80 truncate">{capitalizeFirst(artist)}</p>
        </div>
        <div className="ml-auto content-center mr-5">
          <img className="h-1" src="https://img.icons8.com/?size=100&id=60&format=png&color=000000" alt="arrowPNG" />
        </div>
      </div>
    </>
  );
};

export default FetchLayout;
