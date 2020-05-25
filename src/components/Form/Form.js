import "./index.scss";

import React, { useState, useEffect } from "react";
import uid from "uid";
import axios from "axios";
const baseUrl = `https://api.chucknorris.io/jokes/`;

const Form = ({ setJokes }) => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("celebrity");
  const [option, setOption] = useState(2);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get(baseUrl + "categories");
      const responce = res.data.slice(0, 4);

      setCategories(responce);
    } catch (error) {
      console.log(error);
    }
  };

  const setOptionChange = (value) => {
    setCategory("celebrity");
    setOption(+value);
    setQuery("");
  };

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

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const url =
        option === 1
          ? `random`
          : option === 2
          ? `random?category=${category}`
          : `search?query=${query}`;

      const res = await axios.get(baseUrl + url);
      const data = option === 1 || option === 2 ? [res.data] : res.data.result;

      setJokes(data);
      setOptionChange(2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={`form`} onSubmit={submitForm} method="GET">
      <label className={`form__label`}>
        <input
          type="radio"
          className={`form__input`}
          name="option"
          value={1}
          checked={option === 1}
          onChange={(event) => setOptionChange(event.target.value)}
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
          checked={option === 2}
          onChange={(event) => setOptionChange(event.target.value)}
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
          checked={option === 3}
          onChange={(event) => setOptionChange(event.target.value)}
        />
        <span className={`form__design`}></span>
        <span className={`form__text`}>Search</span>
      </label>
      {option === 3 && (
        <input
          value={query}
          type="text"
          minLength="3"
          className={`form__search`}
          name="option"
          placeholder="Free text search"
          onChange={(event) => setQuery(event.target.value)}
        />
      )}
      <button
        type="submit"
        className={`form__button`}
        disabled={option === 3 && query.length <= 3}
      >
        Get a joke
      </button>
    </form>
  );
};

export default Form;
