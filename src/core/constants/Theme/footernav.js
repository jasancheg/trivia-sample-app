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
    footerNav: {
      justifyContent: "space-between",
      height: footerNavHeight,
      flexDirection: "row",
      alignSelf: "stretch",
      flex: 1
    }
  }
};

export default styles;
