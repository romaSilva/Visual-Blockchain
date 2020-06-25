import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideMenu />
      <Main />
      <GlobalStyles />
    </Router>
  );
}

export default App;
