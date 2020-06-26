import React from "react";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import Store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Store>
      <Router>
        <SideMenu />
        <Main />
        <GlobalStyles />
      </Router>
    </Store>
  );
}

export default App;
