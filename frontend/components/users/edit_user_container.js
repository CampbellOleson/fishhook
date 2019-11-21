import EditUser from "./edit_user";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  updateUser: formUser => dispatch(updateUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
