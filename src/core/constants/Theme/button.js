/**
 * ./src/core/constants/theme/button.js
 *
 * @flow
 */

import {
  btnSmallFontSize,
  btnFontSize,
  textColor,
  primary,
  raised,
  white
} from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    container: {
      marginRight: 15,
      marginLeft: 15,
      android: {},
      ios: {}
    },
    button: {
      backgroundColor: primary,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      padding: 19
    },
    text: {
      fontSize: btnFontSize,
      color: white
    },
    activityIndicator: {
      marginHorizontal: 10,
      height: 0
    }
  },
  small: {
    button: {
      padding: 12
    },
    text: {
      fontSize: btnSmallFontSize
    }
  },
  icon: {
    button: {
      marginRight: 10
    }
  },
  iconRight: {
    button: {
      marginLeft: 10
    }
  },
  outline: {
    button: {
      backgroundColor: "transparent",
      borderColor: textColor,
      borderWidth: 1
    }
  },
  transparent: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 0
    }
  },
  raised: {
    button: {
      ...raised
    }
  }
};
