import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header";
import Blockchain from "../Blockchain";
import Users from "../Users";
import Transactions from "../Transactions";
import Mining from "../Mining";
import { StyledMainContainer } from "./style";

const Main = () => {
  return (
    <StyledMainContainer>
      <Header />
      <Switch>
        <Route exact path="/blockchain" component={Blockchain}></Route>
        <Route exact path="/users" component={Users}></Route>
        <Route exact path="/transactions" component={Transactions}></Route>
        <Route exact path="/mining" component={Mining}></Route>
      </Switch>
    </StyledMainContainer>
  );
};

export default Main;
