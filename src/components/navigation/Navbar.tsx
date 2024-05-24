import Tabs from "./tabs/Tabs";
import TabsButton from "./tabs/TabsButton";
import { MyContext } from "../GlobalVariableProvider";
import { useContext, useState } from "react";
import { TabNames } from "./tabs/TabNames";
import ThemeController from "./ThemeController";

export default function Navbar() {
  const { globalVariable, setGlobalVariable } = useContext(MyContext);
  
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
                <TabsButton
                  classProperties="tab"
                  isSelected={globalVariable == TabNames.tab1}
                  onClick={() => setGlobalVariable(TabNames.tab1)}
                >
                  Menu
                </TabsButton>
              </li>
              <li>
                <TabsButton
                  classProperties="tab"
                  isSelected={globalVariable == TabNames.tab2}
                  onClick={() => setGlobalVariable(TabNames.tab2)}
                >
                  Albums
                </TabsButton>
              </li>
            </ul>
          </div>
          {/* Normal navigation bar */}
          <TabsButton
            classProperties="btn btn-ghost text-xl"
            onClick={() => setGlobalVariable(TabNames.tab1)}
          >
            iTunes albums
          </TabsButton>
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
