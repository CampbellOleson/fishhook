import FormErrors from "./form_errors";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  errors: state.errors.session
});

const FormErrorsContainer = connect(mapStateToProps)(FormErrors);
export default FormErrorsContainer;
