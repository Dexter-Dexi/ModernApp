import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex flex-1 hidden justify-end items-center space-x-7">
        {navLinks.map((item) => {
          return (
            <li key={item.id} className="font-poppins hover:cursor-pointer">
              <a href="#">{item.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex-1 flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          srcSet=""
          className="h-[24px] w-[24px] object-contain"
          onClick={() => setToggle((oldValue) => !oldValue)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} // adding extra margin
        >
          <ul className="list-none flex-col flex-1  justify-end items-center space-x-7">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`font-poppins hover:cursor-pointer mb-4 mr-0 ${
                    index == 0 ? "ml-7" : ""
                  }`}
                >
                  <a href="#">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
