import "./index.scss";

import React, { useState, useEffect } from "react";
import Main from "../../containers/Main";
import Favourite from "../../containers/Favourite";

const App = ({ createUser, updateUser, users, match }) => {
  return (
    <div className={`app`}>
      <Main />
      <Favourite />
    </div>
  );
};

export default App;
