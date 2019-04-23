/**
 * ./src/core/constants/theme/text.js
 *
 * @flow
 */

import {
  poppinsSemibold,
  poppinsRegular,
  textDisabled,
  fontSizeNote,
  poppinsBold,
  textColor,
  textLight,
  fontSize,
  primary,
  success,
  warning,
  justify,
  danger,
  italic,
  normal,
  center,
  right,
  info,
  h1,
  h2,
  h3,
  h4
} from "./_constants";

// - it separates style as 'states' or classname definitions
// - each classname supports android and ios keys form specific platform specs
export default {
  default: {
    text: {
      fontFamily: poppinsRegular,
      color: textColor,
      fontSize,
      android: {},
      ios: {}
    }
  },
  bold: {
    text: {
      fontFamily: poppinsBold
    }
  },
  italic: {
    text: {
      fontStyle: italic
    }
  },
  normal: {
    text: {
      fontStyle: normal
    }
  },
  note: {
    text: {
      fontFamily: poppinsSemibold,
      fontSize: fontSizeNote,
      color: textLight
    }
  },
  disabled: {
    text: {
      color: textDisabled
    }
  },
  primary: {
    text: {
      color: primary
    }
  },
  success: {
    text: {
      color: success
    }
  },
  warning: {
    text: {
      color: warning
    }
  },
  justify: {
    text: {
      textAlign: justify
    }
  },
  danger: {
    text: {
      color: danger
    }
  },
  center: {
    text: {
      textAlign: center
    }
  },
  right: {
    text: {
      textAlign: right
    }
  },
  info: {
    text: {
      color: info
    }
  },
  h1: {
    text: {
      fontSize: h1
    }
  },
  h2: {
    text: {
      fontSize: h2
    }
  },
  h3: {
    text: {
      fontSize: h3
    }
  },
  h4: {
    text: {
      fontSize: h4
    }
  }
};
