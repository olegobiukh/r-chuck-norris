import "./index.scss";
import heartImg from "../../assets/icons/heart.svg";
import heartEmptyImg from "../../assets/icons/heart-empty.svg";
import messageImg from "../../assets/icons/message.svg";
import linkImg from "../../assets/icons/link.svg";

import React, { useState, useEffect } from "react";

const Joke = ({ isFavourite }) => {
  console.log(isFavourite);

  return (
    <article
      className={`joke ${isFavourite ? "joke--favourite" : "joke--main"}`}
    >
      <img
        src={isFavourite ? heartImg : heartEmptyImg}
        alt="heart"
        className={`joke__heart`}
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
          <span className={`joke__id joke__id--blue`}>
            XNaAxUduSw6zANDaIEab7A
          </span>
          <img src={linkImg} alt="link" className={`joke__link`} />
        </p>
        <p
          className={`joke__text ${
            isFavourite ? "joke__text--favourite" : "joke__text--main"
          }`}
        >
          No one truly knows who's Chuck Norris' real father. No one is
          biologically strong enough for this. He must've conceived himself.
        </p>
        <div
          className={`joke__bottom ${
            isFavourite ? "joke__bottom--favourite" : "joke__bottom--main"
          }`}
        >
          <p className={`joke__update`}>Last update: 1923 hours ago</p>
          {!isFavourite && <p className={`joke__option`}>celebrity</p>}
        </div>
      </div>
    </article>
  );
};

export default Joke;
