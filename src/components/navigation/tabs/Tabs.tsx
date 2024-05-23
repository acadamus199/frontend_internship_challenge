import TabsButton from "./TabsButton.js";
import { useContext } from "react";
import { MyContext } from "../../GlobalVariableProvider.js";
import { TabNames } from "./TabNames.js";


export default function Tabs() {
  const {globalVariable, setGlobalVariable } = useContext(MyContext);

  function PageManager(page: string) {
    setGlobalVariable(page);
  }

  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        <TabsButton classProperties="tab"
          isSelected={globalVariable == TabNames.tab1}
          onClick={() => PageManager(TabNames.tab1)}
        >
          Menu
        </TabsButton>
        <TabsButton classProperties="tab"
          isSelected={globalVariable == TabNames.tab2}
          onClick={() => PageManager(TabNames.tab2)}
        >
          Albums
        </TabsButton>
      </div>
    </>
  );
}
