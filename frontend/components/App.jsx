import React from "react";
import { HomeRoute, ProtectedRoute } from "../util/route_util";
import ProfileContainer from "./users/profile_container";
import EditUserContainer from "./users/edit_user_container.js";
import Nav from "./nav/nav";

const App = () => {
  return (
    <div>
      <Nav />
      <HomeRoute exact path="/" />
      <ProtectedRoute component={ProfileContainer} path="/users/:userId" />
      <ProtectedRoute
        component={EditUserContainer}
        path="/users/:userId/edit"
      />
    </div>
  );
};

export default App;
