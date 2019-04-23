/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { footerNavHeight } from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    footerNav: {
      justifyContent: "space-between",
      height: footerNavHeight,
      flexDirection: "row",
      alignSelf: "stretch",
      flex: 1
    }
  }
};
