import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { createUser } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  createUser: formUser => dispatch(createUser(formUser))
});

const SignupContainer = connect(
  null,
  mapDispatchToProps
)(SignupForm);

export default SignupContainer;
// to be used in the splash page component
