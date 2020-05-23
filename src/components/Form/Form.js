import "./index.scss";

import React, { useState, useEffect } from "react";
import uid from "uid";

const Form = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("celebrity");
  const [option, setOption] = useState(2);

  const setOptionChange = (value) => {
    setCategory("celebrity");
    setOption(+value);
    setQuery("");
  };
  const categories = ["animal", "career", "celebrity", "dev"];
  const tags = categories.map((item) => (
    <button
      key={uid()}
      type="button"
      className={`form__tag ${category === item && "form__tag--active"}`}
      onClick={() => setCategory(item)}
    >
      {item}
    </button>
  ));
  return (
    <form className={`form`}>
      <label className={`form__label`}>
        <input
          type="radio"
          className={`form__input`}
          name="option"
          value={1}
          onChange={(event) => setOptionChange(event.target.value)}
          checked={option === 1}
        />
        <span className={`form__design`}></span>
        <span className={`form__text`}>Random</span>
      </label>
      <label className={`form__label`}>
        <input
          type="radio"
          className={`form__input`}
          name="option"
          value={2}
          onChange={(event) => setOptionChange(event.target.value)}
          checked={option === 2}
        />
        <span className={`form__design`}></span>
        <span className={`form__text`}>From caterogies</span>
      </label>
      {option === 2 && <div className={`form__tags`}>{tags}</div>}
      <label className={`form__label`}>
        <input
          type="radio"
          className={`form__input`}
          name="option"
          value={3}
          onChange={(event) => setOptionChange(event.target.value)}
          checked={option === 3}
        />
        <span className={`form__design`}></span>
        <span className={`form__text`}>Search</span>
      </label>
      {option === 3 && (
        <input
          value={query}
          type="text"
          className={`form__search`}
          name="option"
          placeholder="Free text search"
          onChange={(event) => setQuery(event.target.value)}
        />
      )}
      <button type="submit" className={`form__button`}>
        Get a joke
      </button>
    </form>
  );
};

export default Form;
