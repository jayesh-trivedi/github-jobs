import React, { Component } from "react";
import ViewJob from "./components/viewjob";
import Home from "./components/home";
import { Switch, Route, withRouter,Redirect } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/job/:id" component={ViewJob} />
        <Route exact path="/" render={() => (
    <Redirect to="/home"/>
)}/>
      </Switch>
    );
  }
}

export default withRouter(Router);
