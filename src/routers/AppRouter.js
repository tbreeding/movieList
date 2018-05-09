import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import Nav from "../components/Nav";

const AppRouter = () => (
  <BrowserRouter>
    <div className="Router">
      <Nav />
      <Switch>  
        <Route path="/" component={HomePage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;