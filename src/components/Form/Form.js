import "./index.scss";

import React, { useState, useEffect } from "react";

const Form = ({ isFavourite }) => {
  console.log(isFavourite);

  return (
    <form className={`form`}>
      <label className={`form__label`}>
        <input type="radio" className={`form__input`} name="option" />
        <span className={`form__design`}></span>
        <span className={`form__text`}>Random</span>
      </label>
      <label className={`form__label`}>
        <input type="radio" className={`form__input`} name="option" />
        <span className={`form__design`}></span>
        <span className={`form__text`}>From caterogies</span>
      </label>
      <div className={`form__tags`}>
        <button type="button" className={`form__tag`}>
          animal
        </button>
        <button type="button" className={`form__tag`}>
          career
        </button>
        <button
          type="button"
          className={`form__tag ${true && "form__tag--active"}`}
        >
          celebrity
        </button>
        <button type="button" className={`form__tag`}>
          dev
        </button>
      </div>
      <label className={`form__label`}>
        <input type="radio" className={`form__input`} name="option" />
        <span className={`form__design`}></span>
        <span className={`form__text`}>Search</span>
      </label>
      <button type="submit" className={`form__button`}>
        Get a joke
      </button>
    </form>
  );
};

export default Form;
