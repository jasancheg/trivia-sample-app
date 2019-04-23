import { connect } from "react-redux";
import SignUp from "../../../screens/SignUp";
import { clearState } from "../../../screens/SignIn/actions";
import { signUpUser } from "../../../screens/SignUp/actions";

const mapStateToProps = ({ auth }) => {
  const { error, loading, user } = auth;

  return { authError: error, loading, user };
};

export default connect(
  mapStateToProps,
  { signUpUser, clearState }
)(SignUp);
