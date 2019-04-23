/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { iconFontSize, iconColor } from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    icon: {
      fontSize: iconFontSize,
      color: iconColor
    }
  }
};
