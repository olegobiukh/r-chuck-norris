import "./index.scss";
import openImg from "../../assets/icons/burger-close.svg";
import closeImg from "../../assets/icons/burger-open.svg";

import React from "react";

const Burger = ({ isMenuOpened, setMenuStatus, isFavourites }) => {
  return (
    <button
      className={`main__top-title ${isFavourites ? "burger--favourite" : null}`}
      onClick={() => setMenuStatus(!isMenuOpened)}
    >
      <img src={isMenuOpened ? openImg : closeImg} alt="burger" />
      <span className={`main__top-title--text`}>Favourite</span>
    </button>
  );
};

export default Burger;
