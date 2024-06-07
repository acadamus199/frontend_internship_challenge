type SAm = {
  query: any;
  onChange: any;
  data: any;
};
const SelectAmount: React.FC<SAm> = ({ data, query, onChange }) => {
  function calculatedVal(i: number) {
    return Math.ceil(data.length / i);
  }

  return (
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
