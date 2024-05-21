export default function Tabs() {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </>
  );
}