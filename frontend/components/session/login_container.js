import LoginForm from "./login_form";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(LoginForm);

export default LoginContainer;
