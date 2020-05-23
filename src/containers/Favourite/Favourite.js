import "./index.scss";

import React, { useState, useEffect } from "react";
import Joke from "../../components/Joke";

const Favourite = ({ createUser, updateUser, users, match }) => {
  return (
    <section className={`favourite`}>
      <h2 className={`favourite__title`}>Favourite</h2>
      <div className={`favourite__container`}>
        <Joke isFavourite />
        <Joke isFavourite />
        <Joke isFavourite />
        <Joke isFavourite />
        <Joke isFavourite />
        <Joke isFavourite />
      </div>
    </section>
  );
};

export default Favourite;
