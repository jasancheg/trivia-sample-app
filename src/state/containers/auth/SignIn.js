import { connect } from "react-redux";
import SignIn from "../../../screens/SignIn";
import { signInUser, clearState } from "../../screens/SignIn/actions";

const mapStateToProps = ({ auth }) => {
  const { error, loading, user } = auth;

  return { authError: error, loading, user };
};

export default connect(
  mapStateToProps,
  { signInUser, clearState }
)(SignIn);
