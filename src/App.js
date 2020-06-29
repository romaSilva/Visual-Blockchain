import React from "react";
import Main from "./containers/Main";
import SideMenu from "./components/SideMenu";
import Store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MinedModal from "./components/MinedModal";

function App() {
  return (
    <Store>
      <Router>
        <MinedModal />
        <SideMenu />
        <Main />
        <GlobalStyles />
      </Router>
    </Store>
  );
}

export default App;
