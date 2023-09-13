import React, { useState } from "react";
import styles from "./MainNav.module.css";
import Cart from "./FoodCart/Cart";
import { BsCodeSlash } from "react-icons/bs";

function MainNav() {
  const [display, setDisplay] = useState("all"); // Initialize to 'all' to show all items

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.myItems}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div>
            <h2>
              Hooman Production <BsCodeSlash />{" "}
            </h2>
          </div>
          <div className={styles.mySearch}>
            <input placeholder="Search your Food" />
          </div>
        </div>

        <div className={styles.filterBtn}>
          <button onClick={() => setDisplay("all")}>All</button>
          <button onClick={() => setDisplay("breakfast")}>Breakfast</button>
          <button onClick={() => setDisplay("lunch")}>Lunch</button>
          <button onClick={() => setDisplay("dinner")}>Dinner</button>
        </div>

        <Cart display={display} />
      </div>
    </>
  );
}

export default MainNav;
