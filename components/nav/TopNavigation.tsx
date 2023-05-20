"use client";
import Menu from "./Menu";
import SearchModal from "./search/SearchModal";
import Basket from "./basket/BasketDropDown";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <header className="w-full fixed top-0 left-0 h-16 z-50 flex justify-between border-b items-center border-dark_ border-opacity-20 bg-white/70">
      <span className="flex md:hidden ml-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <Menu style="flex md:hidden" ulStyle="shadow mt-3 p-2" />
          </div>
        </div>
      </span>

      {/* <DrawerMenu visibility={toggle} close={toggleDrawer} /> */}

      <Link href={"/"}>
        <h2 className="text-dark_ font-bold ml-4">Cozy®</h2>
      </Link>

      <Menu style="hidden md:flex" />

      <div className="flex gap-x-4 h-16 items-center">
        <SearchModal />

        <div className="flex items-center justify-center border-l border-dark_ border-opacity-20  px-8">
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
