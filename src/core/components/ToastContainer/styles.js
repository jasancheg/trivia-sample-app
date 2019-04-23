/**
 * ./src/core/components/ToastContainer/styles.js
 *
 * @flow
 */

import { Platform, StyleSheet } from "react-native";

const getVerticalPadding = (): number => (Platform.OS === "ios" ? 30 : 0);
const paddingHorizontal = Platform.OS === "ios" ? 20 : 0;

const styles = StyleSheet.create({
  toastContainer: {
    bottom: getVerticalPadding(),
    top: getVerticalPadding(),
    paddingHorizontal,
    position: "absolute",
    width: "100%",
    elevation: 9
  }
});

export default styles;
