import "./index.scss";
import heartImg from "../../assets/icons/heart.svg";
import messageImg from "../../assets/icons/message.svg";
import linkImg from "../../assets/icons/link.svg";

import React, { useState, useEffect } from "react";

const Joke = ({ createUser, updateUser, users, match }) => {
  return (
    <article className={`joke`}>
      <img src={heartImg} alt="heart" className={`joke__heart`} />
      <div className={`joke__box`}>
        <div className={`joke__message`}>
          <img src={messageImg} alt="message" />
        </div>
        <p className={`joke__id`}>
          ID:
          <span className={`joke__id joke__id--blue`}>
            XNaAxUduSw6zANDaIEab7A
          </span>
          <img src={linkImg} alt="link" className={`joke__link`} />
        </p>
        <p className={`joke__text`}>
          No one truly knows who's Chuck Norris' real father. No one is
          biologically strong enough for this. He must've conceived himself.
        </p>
        <div className={`joke__bottom`}>
          <p className={`joke__update`}>Last update: 1923 hours ago</p>
          <p className={`joke__option`}>celebrity</p>
        </div>
      </div>
    </article>
  );
};

export default Joke;
