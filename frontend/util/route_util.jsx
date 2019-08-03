import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import SplashPage from "../components/session/splash_page";
import PostsIndexContainer from "../components/posts/posts_index_container";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.entities.users[state.session.currentUserId])
});

const Home = ({ loggedIn, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (loggedIn ? <PostsIndexContainer /> : <SplashPage />)}
  />
);

export const HomeRoute = withRouter(connect(mapStateToProps)(Home));
