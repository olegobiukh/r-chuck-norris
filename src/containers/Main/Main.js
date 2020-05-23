import "./index.scss";

import React, { useState, useEffect } from "react";
import Joke from "../../components/Joke/Joke";
import Form from "../../components/Form";

const Main = ({ createUser, updateUser, users, match }) => {
  return (
    <main className={`main`}>
      <div className={`main__wrapper`}>
        <h2 className={`main__logo`}>MSI 2020</h2>
        <div className={`main__heading`}>
          <h1 className={`main__title`}>Hey!</h1>
          <p className={`main__subtitle`}>Let’s try to find a joke for you:</p>
        </div>
        <Form />
        <div className={`main__jokes`}>
          <Joke />
        </div>
      </div>
    </main>
  );
};

export default Main;
