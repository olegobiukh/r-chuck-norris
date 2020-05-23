import "./index.scss";

import React from "react";
import Joke from "../../components/Joke";
import uid from "uid";
import Burger from "../../components/Burger/Burger";

const Favourite = ({ isMenuOpened, setMenuStatus }) => {
  console.log(localStorage.getItem("favourites"));
  const jokes = localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [];
  console.log(1);

  const items = jokes.map((item) => (
    <Joke key={uid()} isFavourite item={item} />
  ));

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
