import Navbar from "./components/navigation/Navbar.tsx";
import Footer from "./components/navigation/Footer.tsx";
import Fetch from "./components/ApiFetch/Fetch.tsx";
import TabSelector from "./components/navigation/tabs/TabSelector.tsx";
import { useContext } from "react";
import { MyContext } from "./components/GlobalVariableProvider.tsx"
import { TabNames } from "./components/navigation/tabs/TabNames.tsx";

function App() {
  const {globalVariable} = useContext(MyContext);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mt-24 mb-10">
        <div className="bg-base-100 shadow-Around rounded-md size-11/12 grid justify-items-center p-2">
          <div className="w-10/12 shadow-xl">
            <TabSelector hiddenState={globalVariable == TabNames.tab2}>
              <Fetch></Fetch>
            </TabSelector>
            <TabSelector hiddenState={globalVariable != TabNames.tab2}>
              <p>To tymczasowa wartość</p>
            </TabSelector>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
