/**
 * ./src/core/components/FooterTabNavigation/index.js
 *
 * @flow
 */

import React from "react";
// import { createBottomTabNavigator, NavigationEvents } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import { View } from "react-native";
import { Svg } from "expo";

import Profile from "../../../screens/Profile";
import Score from "../../../screens/Score";
import Play from "../../../screens/Play";
import { theme } from "../../constants";
import { getStyles } from "../../utils";
import FooterNav from "../FooterNav";

import { footerNavHeight } from "../../constants/theme/_constants";

type ScreenObjType = {
  screenProps: {},
  navigation: {}
};

// type PayloadType = {
//   type: string,
//   state: {}
// };

// get composed styles from received props
const styles = getStyles({}, "footerTabNavigation");

const PlayScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Play> => (
  <Play navigation={navigation} />
);

const ScoreScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Score> => (
  <Score navigation={navigation} />
);

const ProfileScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Profile> => (
  <Profile navigation={navigation} />
);

const tabBarComponent = (props: {}): React$Element<typeof View> => {
  // const navEvent = (payload: PayloadType): void => {
  //   console.log(payload.type, payload.state, Object.keys(payload));
  // };
  // <NavigationEvents onWillFocus={navEvent} onDidFocus={navEvent} />

  const { orange, lavender } = theme.colors;
  const { width } = theme.layout;

  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Svg height={footerNavHeight} width={width}>
          <Svg.Defs>
            <Svg.LinearGradient id="grad" x1="0" y1="0" x2={width} y2="0">
              <Svg.Stop offset="0" stopColor={orange} stopOpacity="1" />
              <Svg.Stop offset="1" stopColor={lavender} stopOpacity="1" />
            </Svg.LinearGradient>
          </Svg.Defs>
          <Svg.Rect
            x={0}
            y={0}
            width={width}
            height={footerNavHeight}
            strokeWidth={0}
            stroke="transparent"
            fill="url(#grad)"
          />
        </Svg>
      </View>
      <View style={styles.contents}>
        <FooterNav {...props} />
      </View>
    </View>
  );
};

const FooterTabNavigation = createBottomTabNavigator(
  {
    play: { screen: PlayScreen },
    score: { screen: ScoreScreen },
    profile: { screen: ProfileScreen }
  },
  {
    tabBarComponent,
    lazy: true
  }
);

export default FooterTabNavigation;
