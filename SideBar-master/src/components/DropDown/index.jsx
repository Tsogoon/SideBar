import React from "react";
import css from "./DropDown.module.css";

export default function DropDown() {
  return (
    <div className={css.menu}>
      <a href="#">Services +</a>
      <ul className={css.menuul}>
        <li>
          <a href="#">Website</a>
        </li>
        <li>
          <a href="#">Web App</a>
        </li>
      </ul>
    </div>
  );
}
