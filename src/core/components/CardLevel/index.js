/**
 * ./src/core/components/Title/index.js
 *
 * @flow
 */

import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { titleHeight } from "../../constants/theme/_constants";
import { theme } from "../../constants";
import { getStyles } from "../../utils";
import Text from "../Text";

type PropsType = {
  children: string,
  lastScore: string,
  playedIn: string
}

// get composed styles from received props
const styles = getStyles({}, "cardlevel");

const titleComponent = (props: PropsType): React$Element<typeof View> => {
  const { orange, lavender } = theme.colors;
  const { width, height } = theme.layout;
  const { children, lastScore = "", playedIn = "" } = props;

  const footerText = lastScore 
    ? `Last Score: ${lastScore} played in: ${playedIn}` 
    : "Play the first match";

  console.log("PROPS", props);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text uppercase bold style={styles.text}>{children}</Text>
      </View>
      <View style={styles.body}>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity
            onPress={(): void => {
              alert("music is temporaly disabled");
            }}
          >
            <Icon name="music-note-off" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          {footerText}
        </Text>
      </View>
    </View> 
  );
};

export default titleComponent;
