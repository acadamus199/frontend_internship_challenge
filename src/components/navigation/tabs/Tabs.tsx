import TabsButton from "./TabsButton.js";
import { Link, useLocation } from "react-router-dom";
import { TabNames } from "./TabNames.js";

export default function Tabs(this: any) {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        <TabsButton classProperties="tab" isSelected={useLocation().pathname === "/"}><Link to={TabNames.tab1}>Menu</Link></TabsButton>
        <TabsButton classProperties="tab" isSelected={useLocation().pathname === "/albums"}><Link to={TabNames.tab2}>Albums</Link></TabsButton>
      </div>
    </>
  );
}
