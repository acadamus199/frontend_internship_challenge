export default function SelectAmount() {
  return (
    <>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Select amount to be shown
        </option>
        <option>10</option>
        <option>30</option>
      </select>
    </>
  );
}
