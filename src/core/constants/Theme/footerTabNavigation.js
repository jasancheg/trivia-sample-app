/**
 * ./src/core/constants/theme/footer.js
 *
 * @flow
 */

import { footerNavHeight, amethist } from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    container: {
      backgroundColor: amethist,
      height: footerNavHeight,
      position: "relative"
    },
    contents: {
      marginTop: -footerNavHeight,
      height: footerNavHeight,
      position: "relative"
    },
    bg: {
      height: footerNavHeight,
      position: "relative"
    }
  }
};
