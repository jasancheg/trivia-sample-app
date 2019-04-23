/**
 * ./src/core/constants/theme/layout.js
 *
 * @flow
 */

import { Dimensions, PixelRatio } from "react-native";
import Expo from "expo";

export const { height: deviceHeight, width } = Dimensions.get("window");

const height = deviceHeight - Expo.Constants.statusBarHeight;
const pixelRatio = PixelRatio.get();

export default {
  pixelRatio,
  height,
  width
};
