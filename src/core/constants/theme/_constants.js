/**
 * ./src/core/constants/theme/constants.js
 *
 * @flow
 */
/* eslint-disable implicit-arrow-linebreak */

import { Platform } from "react-native";
// import { Constants } from 'expo';

import color from "color";

import normalizeText from "../../utils/normalizeText";

/* Definitions */

// font names
export const poppinsSemibold = "Poppins_semibold";
export const poppinsRegular = "Poppins_regular";
export const poppinsMedium = "Poppins_medium";
export const poppinsLight = "Poppins_light";
export const poppinsBold = "Poppins_bold";
export const robotoMedium = "Roboto_medium";
export const roboto = "Roboto";
export const ionicons = "Ionicons";

// font style
export const italic = "italic";
export const normal = "normal";

// text align
export const justify = "justify"; // only ios
export const center = "center";
export const right = "right";

// font sizes
export const fontSizeNote = normalizeText(11);
export const fontSize = normalizeText(12);
export const h1 = normalizeText(40);
export const h2 = normalizeText(34);
export const h3 = normalizeText(28);
export const h4 = normalizeText(22);
export const btnSmallFontSize = normalizeText(14);
export const btnFontSize = normalizeText(16);

// available colors
export const orange = "#cd4881";
export const lavender = "#fe795c";
export const secondary = "#8F0CE8";
export const disabled = "#dadee0";
export const primary = "#007db5";
export const success = "#5cb85c";
export const warning = "#f0ad4e";
export const sidebar = "#252932";
export const danger = "#d9534f";
export const info = "#62B1F6";

export const grey0 = "#393e42";
export const grey1 = "#43484d";
export const grey2 = "#5e6977";
export const grey3 = "#86939e";
export const grey4 = "#bdc6cf";
export const grey5 = "#e1e8ee";
export const dkGreyBg = "#232323";
export const greyOutline = "#bbb";
export const searchBg = "#303337";
export const primaryBG = "#03A9F4";

export const placeholderColor = "#CCCCCC";
export const textDisabled = "#969696";
export const textLight = "#969696";
export const textColor = "#000000";
export const white = "#FFFFFF";

export const statusBarColor = ((): string =>
  color(primary)
    .darken(0.2)
    .hex())();

// Icon Component
export const iconFontSize = Platform.OS === "ios" ? 30 : 28;
export const iconColor = "#000";

// Button props
export const raised = Platform.select({
  ios: {
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  android: {
    backgroundColor: "#fff",
    elevation: 2
  }
});

// footerNav and tabIcon components
export const footerNavSeparatorHeight = 6;
export const footerNavHeight = 60;
export const tabBar = "#fefefe";

export const tabIconSelected = "#fff";
export const tabIconMarginBottom = -3;
export const tabIconDefault = "#ccc";
export const tabIconSize = 28;
