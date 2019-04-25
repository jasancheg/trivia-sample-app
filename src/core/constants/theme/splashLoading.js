/**
 * ./src/core/constants/theme/statusbar.js
 *
 * @flow
 */

import { amethist } from "./_constants";

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    splashLoading: {
      justifyContent: "space-around",
      backgroundColor: amethist,
      flexDirection: "row",
      padding: 10,
      flex: 1
    }
  }
};

export default styles;
