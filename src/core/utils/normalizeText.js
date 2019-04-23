/**
 * ./src/core/utils/normalizeText.js
 *
 * this module is very important to manage the properly
 * scale of the font size as per device resolution
 *
 * - make changes only if you are completely sure of what you are doing!!!
 * - Some code taken from
 * - https://stackoverflow.com/questions/34837342/font-size-on-iphone-6s-plus
 *
 * @flow
 */

import { PixelRatio, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const pixelRatio = PixelRatio.get();

// -- Testing Only --
// const fontScale = PixelRatio.getFontScale();
// const layoutSize = PixelRatio.getPixelSizeForLayoutSize(14);
// console.log("normalizeText getPR ->", pixelRatio);
// console.log("normalizeText getFS ->", fontScale);
// console.log("normalizeText getDH ->", deviceHeight);
// console.log("normalizeText getDW ->", deviceWidth);
// console.log("normalizeText getPSFLS ->", layoutSize);

export default (size: number): number => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  } else {
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    return size;
  }
};
