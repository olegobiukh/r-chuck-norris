import "./index.scss";

import React, { useState } from "react";
import Joke from "../../components/Joke/Joke";
import Form from "../../components/Form";
import uid from "uid";
import Burger from "../../components/Burger/Burger";

const Main = ({ isMenuOpened, setMenuStatus }) => {
  const [jokes, setJokes] = useState([]);
  const jokeItems = jokes.map((item) => <Joke key={uid()} item={item} />);

  return (
    <main className={`main ${isMenuOpened ? "main--hidden" : null}`}>
      <div className={`main__wrapper`}>
        <div className={`main__top`}>
          <h2 className={`main__logo`}>MSI 2020</h2>
          {!isMenuOpened && (
            <Burger isMenuOpened={isMenuOpened} setMenuStatus={setMenuStatus} />
          )}
        </div>
        <div className={`main__heading`}>
          <h1 className={`main__title`}>Hey!</h1>
          <p className={`main__subtitle`}>Let’s try to find a joke for you:</p>
        </div>
        <Form const setJokes={setJokes} />
        {jokes.length > 0 && <div className={`main__jokes`}>{jokeItems}</div>}
      </div>
    </main>
  );
};

export default Main;
