import "./index.scss";
import { Context } from "../../context";

import React, { useState, useEffect } from "react";
import Main from "../../containers/Main";
import Favourite from "../../containers/Favourite";

const App = () => {
  const [isMenuOpened, setMenuStatus] = useState(false);
  const [favourites, setFauvorites] = useState([]);

  useEffect(() => {
    const newFavourites = JSON.parse(localStorage.getItem("favourites"));
    setFauvorites(newFavourites);
  }, []);

  return (
    <Context.Provider value={{ favourites, setFauvorites }}>
      <div className={`app ${isMenuOpened ? "app--overflow" : null}`}>
        <Main isMenuOpened={isMenuOpened} setMenuStatus={setMenuStatus} />
        <Favourite isMenuOpened={isMenuOpened} setMenuStatus={setMenuStatus} />
        <div
          className={`app__background ${
            isMenuOpened ? "app__background--active" : null
          }`}
        ></div>
      </div>
    </Context.Provider>
  );
};

export default App;
