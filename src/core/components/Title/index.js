/**
 * ./src/core/components/Title/index.js
 *
 * @flow
 */

import React from "react";
import { View } from "react-native";

import { getStyles } from "../../utils";
import Text from "../Text";

type PropsType = {
  children: string
}

// get composed styles from received props
const styles = getStyles({}, "title");

export default (props: PropsType): React$Element<typeof View> => (
  <View style={styles.container}>
    <View style={styles.contents}>
      <Text uppercase bold style={styles.text}>{props.children}</Text>
    </View>
  </View> 
);
