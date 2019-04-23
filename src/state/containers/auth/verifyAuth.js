import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  user: PropTypes.object
};

const defaultProps = {
  user: null
};

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.verifyRedirect(this.props.user);
    }

    componentWillUpdate(nextProps) {
      this.verifyRedirect(nextProps.user);
    }

    verifyRedirect(user) {
      const { routeName } = this.props.navigation.state;
      console.log("verifyRedirect", routeName, user);

      if (user && routeName !== "Drawer") {
        // Primus connection, provide access to redux dispatch actions method
        // const Primus = PrimusManager.getInstance(this.props.dispatch);
        // const primus = Primus.setPrimus(user.sid);
        //this.props.navigation.navigate('Drawer');
      }

      if (!user && routeName === "Drawer") {
        //this.props.navigation.navigate('SignIn');
      }
    }

    render() {
      const { routeName } = this.props.navigation.state;
      const isPrivatePage = routeName !== "SignUp" && routeName !== "SignIn";

      // redirect from private pages to the SignIn page if user does not exist
      if (!this.props.user && isPrivatePage) {
        this.props.navigation.navigate("SignIn");
      }

      // add props to public pages, it includes navigation and dispath to this.props
      return isPrivatePage ? (
        <ComposedComponent />
      ) : (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authentication.defaultProps = defaultProps;
  Authentication.propTypes = propTypes;

  const mapStateToProps = ({ auth }) => ({
    user: auth.user
  });

  return connect(mapStateToProps)(Authentication);
}
