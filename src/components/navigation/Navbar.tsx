import { TabNames } from "./tabs/TabNames";
import Tabs from "./tabs/Tabs";
import TabsButton from "./tabs/TabsButton";
import ThemeController from "./ThemeController/ThemeControllerService";
import { Link, useLocation } from "react-router-dom";

// TODO: [23] W tym pliku jest trochę błędów, które mogłyby być wyłapane przez eslint
// ::::: - 'TS6133: useLocation is declared but its value is never read.'
// ::::: - Zakomentowana linijka useContext(), nieużywany kod powinien być usunięty
export default function Navbar() {
  //const { globalVariable, setGlobalVariable } = useContext(MyContext);

  return (
    <>
      <div className="navbar bg-base-100 shadow-md fixed inset-x-100 top-0 z-40">
        <div className="navbar-start">
          {/* Compact navigation bar */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <TabsButton classProperties="tab"><Link to={TabNames.tab1}>Menu</Link></TabsButton>

              </li>
              <li>
                <TabsButton classProperties="tab"><Link to={TabNames.tab2}>Albums</Link></TabsButton>
              </li>
            </ul>
          </div>
          {/* Normal navigation bar */}
          <TabsButton classProperties="btn btn-ghost text-xl"><Link to={TabNames.tab1}>iTunes albums</Link></TabsButton>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Tabs></Tabs>
        </div>
        <div className="navbar-end">
          <ThemeController></ThemeController>
        </div>
      </div>
    </>
  );
}
