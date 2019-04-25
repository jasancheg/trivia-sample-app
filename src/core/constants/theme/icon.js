/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { iconFontSize, iconColor } from "./_constants";

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    icon: {
      fontSize: iconFontSize,
      color: iconColor
    }
  }
};

export default styles;
