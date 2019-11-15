import DynamicDropdown from "./dynamic_dropdown";
import { connect } from "react-redux";
import { clearSuggestions } from "../../actions/suggestion_actions";

const mapStateToProps = state => ({
  suggestions: Object.values(state.ui.suggestions)
});

// const mapDispatchToProps = dispatch => ({
//   clearSuggestions: () => dispatch(clearSuggestions())
// });

export default connect(mapStateToProps)(DynamicDropdown);
