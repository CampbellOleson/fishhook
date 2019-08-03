import React from "react";
import { HomeRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import ProfileContainer from "./users/profile_container";
import Nav from "./nav/nav";

const App = () => {
  return (
    <div>
      <Nav />
      <HomeRoute exact path="/" />
      <Route component={ProfileContainer} path="/users/:userId" />
    </div>
  );
};
export default App;
