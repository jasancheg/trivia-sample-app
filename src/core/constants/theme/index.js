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

import footerTabNavigation from "./footerTabNavigation";
import splashLoading from "./splashLoading";
import tabBarIcon from "./tabbaricon";
import footerNav from "./footernav";
import hamburger from "./hamburger";
import statusbar from "./statusbar";
import cardlevel from "./cardlevel";
import button from "./button";
import title from "./title";
import text from "./text";

export default {
  // - system
  layout,
  colors,
  fonts,

  // - Components styles
  footerTabNavigation,
  splashLoading,
  tabBarIcon,
  footerNav,
  hamburger,
  statusbar,
  cardlevel,
  button,
  title,
  text
};
