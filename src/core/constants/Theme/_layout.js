/**
 * ./src/core/constants/theme/layout.js
 *
 * @flow
 */

import { Dimensions, PixelRatio } from "react-native";
import { Constants } from "expo";


export const { height: deviceHeight, width } = Dimensions.get("window");

const height = deviceHeight - Constants.statusBarHeight;
const pixelRatio = PixelRatio.get();

export default {
  pixelRatio,
  height,
  width
};
