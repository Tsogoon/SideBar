import React from "react";

import Logo from "../assets/ehlel.png";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="bg-[#373942] w-[190px] pt-1 text-white">
      <div className="">
        <a href="/" className="">
          <img className="ml-10 mt-2 h-10 " src={Logo} alt="" />
        </a>
        <div className="pt-5">
          <div className="mt-1 w-auto">
            <ul>
              <Item icon="bi bi-house" name="Хянах самбар" to="/" />
              <Item
                icon="bi bi-collection"
                name="Бараа материал"
                to="/product"
              />
              <Item icon="bi bi-bag-heart" name="Агуулах" to="/warehouse" />
              <Item icon="bi bi-gear" name="Тохиргоо" to="/settings" />
              <Item icon="bi bi-archive" name="Тайлан" to="/report" />
              <Item icon="bi bi-bag-dash" name="Зардал" to="/cost" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

const Item = ({ icon, name, to }) => {
  return (
    <NavLink to={to}>
      <li className="text-white block font-medium cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:bg-violet-700 mt-2 mr-1">
        <div className="inline-block w-10 h-10 text-xl text-center leading-10 opacity-50">
          <i className={icon}></i>
        </div>
        <span>{name}</span>
      </li>
    </NavLink>
  );
};
