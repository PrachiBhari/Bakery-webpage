import { GrInstagram } from "react-icons/gr";
import { useCallback, useState } from "react";

import styles from "./Menu.module.css";
import { Category } from "../Assets/bakery";
import LogoDalilo from "../Assets/LogoDalilo.svg";

const menuList = [
  {
    menu: "Home",
    category: ["all"],
  },
  {
    menu: "Breads",
    category: ["bread"],
  },
  {
    menu: "Sweet Breads",
    category: ["sweet"],
  },
  {
    menu: "Rolls",
    category: ["rolls"],
  },
  {
    menu: "Cakes",
    category: ["cakes"],
  },
  {
    menu: "Cookies",
    category: ["cookie"],
  },
];

export default function Menu({ categoryFilter }) {
  const [menuActive, setMenuActive] = useState("Home");

  const handleMenu = useCallback(
    (event) => {
      const menuNameSelected = String(event.target.innerHTML).replace(
        "<br>",
        " "
      );
      if (menuNameSelected !== menuActive) {
        setMenuActive(menuNameSelected);
      }
      const menuSelected = menuList.find(
        (menu) => menu.menu === menuNameSelected
      );
      if (menuSelected) {
        return categoryFilter(menuSelected.category);
      }
      return;
    },
    [menuActive, categoryFilter]
  );

  return (
    <aside className={styles.menuContainer}>
      <img src={LogoDalilo} alt="Dalilo Logo" />
      <nav>
        <ul>
          {menuList.map((item) => {
            const isMenuActive = item.menu === menuActive;
            const itemToCheck = item.menu.split(" ");

            if (itemToCheck.length > 1) {
              return (
                <li
                  key={itemToCheck[0] + itemToCheck[1]}
                  className={isMenuActive ? styles.active : ""}
                >
                  <a onClick={handleMenu} tabIndex={1}>
                    {itemToCheck[0]}
                    <br />
                    {itemToCheck[1]}
                  </a>
                </li>
              );
            } else {
              return (
                <li
                  key={itemToCheck[0]}
                  className={isMenuActive ? styles.active : ""}
                >
                  <a onClick={handleMenu} tabIndex={1}>
                    {itemToCheck[0]}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </aside>
  );
}
