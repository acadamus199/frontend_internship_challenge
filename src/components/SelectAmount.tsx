// TODO: [17] To samo co w poprzednim, nazwa niezrozumiała (może i ma sens dla ciebie, ale chodzi o to, żeby miała sens dla większości)
type SAm = {
  query: any;
  onChange: any;
  data: any;
};
// TODO: [16] Nie trzeba tutaj przyjmować data, skoro jedyne co z niej potrzeba to length
// ::::: Można przyjmować tylko allAlbumsAmount i pageAlbumsAmount
const SelectAmount: React.FC<SAm> = ({ data, query, onChange }) => {
  function calculatedVal(i: number) {
    return Math.ceil(data.length / i);
  }

  return (
    // TODO: [18] Nie trzeba wykorzystywać React.Fragment (czyli <></>) jeśli i tak zwracany jest tylko jeden element (<select>)
    <>
      <select
        className="select select-bordered w-full max-w-xs flex m-5 mb-0"
        value={query}
        onChange={onChange}
      >
        <option value={data.length}>
          All albums
        </option>
        <option value={calculatedVal(8)}>{calculatedVal(8)}</option>
        <option value={calculatedVal(4)}>{calculatedVal(4)}</option>
        <option value={calculatedVal(2)}>{calculatedVal(2)}</option>
        <option value={calculatedVal(2) + calculatedVal(4)}>{calculatedVal(2) + calculatedVal(4)}</option>
      </select>
    </>
  );
};

export default SelectAmount;
