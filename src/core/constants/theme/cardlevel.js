/**
 * ./src/core/constants/theme/footer.js
 *
 * @flow
 */

import { cardBody, cardHeader, cardFooter, orange, lavender } from "./_constants";

// - it is a propose for multi theming, states, and classnames
// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
const styles = {
  def: {
    container: {
      // backgroundColor: "green",
      height: cardHeader + cardBody + cardFooter,
      position: "relative",
      padding: 10
    },
    header: {
      backgroundColor: lavender,
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      borderColor: orange,
      borderTopLeftRadius: 6, 
      borderTopRightRadius: 6,
      paddingLeft: 10,
      borderWidth: 2,
      borderBottomWidth: 0,
      flex: 1
    },
    body: {
      backgroundColor: "#959595",    
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
      borderColor: orange,
      paddingLeft: 10,
      borderWidth: 2,
      borderTopWidth: 0,
      borderBottomWidth: 0, 
      flex: 2
    },
    footer: {
      backgroundColor: lavender,
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      borderColor: orange,
      borderBottomLeftRadius: 6, 
      borderBottomRightRadius: 6,
      paddingLeft: 10,
      borderWidth: 2,
      borderTopWidth: 0,
      flex: 1
    },
    text: {
      color: "#fff"
    }
  }
};

export default styles;
