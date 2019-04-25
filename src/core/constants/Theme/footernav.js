/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { footerNavHeight } from "./_constants";

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    container: {
      justifyContent: "space-between",
      height: footerNavHeight,
      flexDirection: "row",
      alignSelf: "stretch",
      flex: 1,
      android: {},
      ios: {}
    },
    item: {
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      flex: 1,
      android: {},
      ios: {}
    },
    text: {
      color: "#ccc"
    },
    textActive: {
      color: "#fff"
    }
  }
};

export default styles;
