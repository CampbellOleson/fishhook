import React from "react";
import { HomeRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import ProfileContainer from "./users/profile_container";
import Nav from "./nav/nav";

const App = () => {
  return (
    <div>
      <Nav />
      <HomeRoute exact path="/" />
      <ProtectedRoute component={ProfileContainer} path="/users/:userId" />
    </div>
  );
};
export default App;
