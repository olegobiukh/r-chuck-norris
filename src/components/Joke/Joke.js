import "./index.scss";
import heartImg from "../../assets/icons/heart.svg";
import heartEmptyImg from "../../assets/icons/heart-empty.svg";
import messageImg from "../../assets/icons/message.svg";
import linkImg from "../../assets/icons/link.svg";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context";

const Joke = ({ item, isFavourite }) => {
  const favouriteContext = useContext(Context);

  const [isFavouriteItem, setFavourites] = useState(false);
  function countHoursAgo() {
    const milliseconds = Math.abs(new Date(item.updated_at) - new Date());
    const hours = Math.floor(milliseconds / 36e5);

    return hours;
  }

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isFavouriteEl =
      favourites.length > 0
        ? favourites.some((el) => el.id === item.id)
        : false;
    setFavourites(isFavouriteEl);

  }, [item.id]);

  const addFavourite = () => {
    const favourites = localStorage.getItem("favourites")
      ? JSON.parse(localStorage.getItem("favourites"))
      : [];

    let newFavourites = favourites.some((el) => el.id === item.id)
      ? favourites.filter((el) => el.id !== item.id)
      : [item, ...favourites];

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setFavourites(!isFavouriteItem);
    favouriteContext.setFauvorites(newFavourites);
  };

  const hours = countHoursAgo();


  return (
    <article
      className={`joke ${isFavourite ? "joke--favourite" : "joke--main"}`}
    >
      <img
        src={isFavouriteItem ? heartImg : heartEmptyImg}
        alt="heart"
        className={`joke__heart ${isFavourite ? "joke__heart--favourite" : "joke__heart--main"}`}
        onClick={addFavourite}
      />
      <div className={`joke__box`}>
        <div
          className={`joke__message ${
            isFavourite ? "joke__message--favourite" : "joke__message--main"
          }`}
        >
          <img src={messageImg} alt="message" />
        </div>
        <p className={`joke__id`}>
          ID:
          <a
            href={`https://api.chucknorris.io/jokes/${item.id}`}
            className={`joke__id joke__id--blue`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.id}
            <img src={linkImg} alt="link" className={`joke__link`} />
          </a>
        </p>
        <p
          className={`joke__text ${
            isFavourite ? "joke__text--favourite" : "joke__text--main"
          }`}
        >
          {item.value}
        </p>
        <div
          className={`joke__bottom ${
            isFavourite ? "joke__bottom--favourite" : "joke__bottom--main"
          }`}
        >
          <p className={`joke__update`}>Last update: {hours} hours ago</p>
          {!isFavourite && item.categories[0] && (
            <p className={`joke__option joke__category`}>
              {item.categories[0]}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default Joke;
