/**
 * ./src/core/constants/theme/footer.js
 *
 * @flow
 */

import { titleHeight, orange, lavender } from "./_constants";

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    container: {
      height: titleHeight + 20,
      position: "relative",
      padding: 10
    },
    contents: {
      backgroundColor: lavender,
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      borderColor: orange,
      height: titleHeight,
      borderRadius: 6,
      paddingLeft: 10,
      borderWidth: 2,
      flex: 1
    },
    text: {
      color: "#fff"
    }
  }
};

export default styles;
