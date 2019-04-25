/**
 * ./src/Trivia.js
 *
 * @flow
 */

import React from "react";
import { View, StyleSheet } from "react-native";

import { Statusbar } from "./core/components";
import Boot from "./core/boot";
import App from "./core/Router";

// $FlowFixMe
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    height: null,
    width: null,
    flex: 1
  }
});

const Trivia = (props: {}): React$Element<typeof Boot> => (
  <Boot {...props}>
    <View style={styles.container}>
      <App />
    </View>
  </Boot>
);

export default Trivia;
