/**
 * ./src/core/constants/theme/index.js
 *
 * @flow
 */

// import { Platform } from 'react-native';
// import { Constants } from 'expo';

import layout from "./_layout";
import colors from "./_colors";
import fonts from "./_fonts";

import footerTabNavigation from "./footertabnavigation";
import splashLoading from "./splashloading";
import footerNav from "./footernav";
import hamburger from "./hamburger";
import statusbar from "./statusbar";
import button from "./button";
import text from "./text";

export default {
  // - system
  layout,
  colors,
  fonts,

  // - Components styles
  footerTabNavigation,
  splashLoading,
  footerNav,
  hamburger,
  statusbar,
  button,
  text
};
