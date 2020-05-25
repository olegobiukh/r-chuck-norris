import "./index.scss";

import React, { useContext } from "react";
import Joke from "../../components/Joke";
import uid from "uid";
import Burger from "../../components/Burger/Burger";
import { Context } from "../../context";

const Favourite = ({ isMenuOpened, setMenuStatus }) => {
  const favouriteContext = useContext(Context);

  const items =
    favouriteContext.favourites.length > 0
      ? favouriteContext.favourites.map((item) => (
          <Joke key={uid()} isFavourite item={item} />
        ))
      : [];

  return (
    <section className={`favourite ${isMenuOpened && "favourite--show"}`}>
      <h2 className={`favourite__title`}>Favourite</h2>
      <Burger
        isMenuOpened={isMenuOpened}
        setMenuStatus={setMenuStatus}
        isFavourites={true}
      />
      <div className={`favourite__container`}>{items}</div>
    </section>
  );
};

export default Favourite;
