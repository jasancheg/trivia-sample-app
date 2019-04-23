/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { amethist } from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    splashLoading: {
      justifyContent: "space-around",
      backgroundColor: amethist,
      flexDirection: "row",
      padding: 10,
      flex: 1
    }
  }
};
