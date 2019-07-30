import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import SplashPage from "../components/session/splash_page";
import PostsIndexContainer from "../components/posts/posts_index_container";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

// just in case:

// const Auth = ({ loggedIn, path, component: Component }) => (
//   <Route
//     path={path}
//     render={props =>
//       loggedIn ? <Redirect to="/" /> : <Component {...props} />
//     }
//   />
// );

// const Protected = ({ loggedIn, path, component: Component }) => (
//   <Route
//     path={path}
//     render={props =>
//       loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
//     }
//   />
// );

const Home = ({ loggedIn, path }) => (
  <Route
    path={path}
    render={props => (loggedIn ? <PostsIndexContainer /> : <SplashPage />)}
  />
);

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
// export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HomeRoute = withRouter(connect(mapStateToProps)(Home));