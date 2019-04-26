/**
 * ./src/core/constants/theme/hamburger.js
 *
 * @flow
 */

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: 35,
      width: 42
    },
    containerIn: {
      justifyContent: "center",
      height: 35,
      width: 22
    }
  }
};

export default styles;
