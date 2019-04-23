/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import Expo from "expo";
import { amethist, esmerald } from "./_constants";
import { width } from "./_layout";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    statusbar: {
      height: Expo.Constants.statusBarHeight,
      position: "absolute",
      borderWidth: 0,
      zIndex: 1,
      width
    }
  },
  amethist: {
    statusbar: {
      backgroundColor: amethist
    }
  },
  esmerald: {
    statusbar: {
      backgroundColor: esmerald
    }
  }
};
