import Tabs from "./Tabs";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-md fixed inset-x-100 top-0">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* Normal navigation bar */}
          <a className="btn btn-ghost text-xl">iTunes albums</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Tabs></Tabs>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}