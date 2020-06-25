import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

function App() {
  return (
    <>
      <SideMenu />
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;
