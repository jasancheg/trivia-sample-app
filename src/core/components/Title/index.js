/**
 * ./src/core/components/Title/index.js
 *
 * @flow
 */

import React from "react";
import { View } from "react-native";

import { titleHeight } from "../../constants/theme/_constants";
import { theme } from "../../constants";
import { getStyles } from "../../utils";
import Text from "../Text";

type PropsType = {
  children: string
}

// get composed styles from received props
const styles = getStyles({}, "title");

const titleComponent = (props: PropsType): React$Element<typeof View> => {
  const { orange, lavender } = theme.colors;
  const { width, height } = theme.layout;
  const { children } = props;

  console.log("PROPS", props);

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text uppercase bold style={styles.text}>{children}</Text>
      </View>
    </View> 
  );
};

export default titleComponent;
