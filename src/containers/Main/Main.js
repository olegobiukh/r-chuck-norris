import "./index.scss";

import React, { useState, useEffect } from "react";
import Joke from "../../components/Joke/Joke";

const Main = ({ createUser, updateUser, users, match }) => {
  return (
    <main className={`main`}>
      <div className={`main__wrapper`}>
        <h2 className={`main__logo`}>MSI 2020</h2>
        <div className={`main__heading`}>
          <h1 className={`main__title`}>Hey!</h1>
          <p className={`main__subtitle`}>Let’s try to find a joke for you:</p>
        </div>
        <form className={`main__options`}>
          <label className={`main__label`}>
            <input type="radio" className={`main__input`} name="option" />
            <span className={`main__design`}></span>
            <span className={`main__text`}>Random</span>
          </label>
          <label className={`main__label`}>
            <input type="radio" className={`main__input`} name="option" />
            <span className={`main__design`}></span>
            <span className={`main__text`}>From caterogies</span>
          </label>
          <div className={`main__tags`}>
            <button type="button" className={`main__tag`}>
              animal
            </button>
            <button type="button" className={`main__tag`}>
              career
            </button>
            <button
              type="button"
              className={`main__tag ${true && "main__tag--active"}`}
            >
              celebrity
            </button>
            <button type="button" className={`main__tag`}>
              dev
            </button>
          </div>
          <label className={`main__label`}>
            <input type="radio" className={`main__input`} name="option" />
            <span className={`main__design`}></span>
            <span className={`main__text`}>Search</span>
          </label>
          <button type="submit" className={`main__button`}>
            Get a joke
          </button>
        </form>
        <div className={`main__jokes`}>
          <Joke />
        </div>
      </div>
    </main>
  );
};

export default Main;
