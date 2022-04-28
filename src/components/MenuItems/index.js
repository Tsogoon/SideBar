import React from "react";
import MenuItem from "../MenuItem";
import css from "./menuitems.module.css";

const MenuItems = () => {
  return (
    <div className={css.MainMenu}>
      <ul>
        <MenuItem iconName="bi bi-building" name="Компани" />
        <MenuItem iconName="bi bi-house" name="Салбарууд" />
        <MenuItem iconName="bi bi-collection" name="Бүтээгдэхүүн" />
        <MenuItem iconName="bi bi-bag-heart" name="Борлуулалт" />
        <MenuItem iconName="bi bi-archive" name="Тайлан" />
        <MenuItem iconName="bi bi-bag-check" name="Худалдан авалт" />
        <MenuItem iconName="bi bi-bag-dash" name="Зардал" />
      </ul>
    </div>
  );
};

export default MenuItems;
