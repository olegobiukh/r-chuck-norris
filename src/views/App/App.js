import "./index.scss";

import React, { useState } from "react";
import Main from "../../containers/Main";
import Favourite from "../../containers/Favourite";

const App = () => {
  const [isMenuOpened, setMenuStatus] = useState(false);

  return (
    <div className={`app ${isMenuOpened ? "app--overflow" : null}`}>
      <Main isMenuOpened={isMenuOpened} setMenuStatus={setMenuStatus} />
      <Favourite isMenuOpened={isMenuOpened} setMenuStatus={setMenuStatus} />
      <div
        className={`app__background ${
          isMenuOpened ? "app__background--active" : null
        }`}
      ></div>
    </div>
  );
};

export default App;
