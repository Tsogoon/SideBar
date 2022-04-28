import React, { useState } from "react";
import css from "./sidemenu.module.css";
import Logo from "../../assets/ehlel.png";
import MenuItem from "../MenuItem";
import MenuItems from "../MenuItems";

const SideMenu = () => {
  const [inactive, setInactive] = useState(true);
  let classes = [css.Menu, css.inactive];
  if (inactive) classes = [css.Menu, css.disactive];
  return (
    <div className={classes.join(" ")}>
      <div className={css.topSection}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
        </div>
        <div
          onClick={() => setInactive(!inactive)}
          className={css.ToggleMenuBtn}
        >
          {inactive ? (
            <i class="bi bi-arrow-left-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-right-square-fill"></i>
          )}
        </div>
        <div className={css.divider}>
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
