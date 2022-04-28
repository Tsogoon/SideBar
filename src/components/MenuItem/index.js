import React from "react";
import css from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li>
      <a className={css.MenuItem}>
        <div className={css.MenuIcon}>
          <i class={props.iconName}></i>
        </div>
        {props.name}
      </a>
    </li>
  );
};

export default MenuItem;
