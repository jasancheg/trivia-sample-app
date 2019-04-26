/**
 * ./src/core/components/FooterTabNavigation/index.js
 *
 * @flow
 */

import React from "react";
import { createBottomTabNavigator, NavigationEvents } from "react-navigation";
import { View } from "react-native";
import { Svg } from "expo";

import Notifications from "../../../screens/Notifications";
import Profile from "../../../screens/Profile";
import Score from "../../../screens/Score";
import About from "../../../screens/About";
import Play from "../../../screens/Play";
import { theme } from "../../constants";
import { getStyles } from "../../utils";
import FooterNav from "../FooterNav";

import { footerNavHeight } from "../../constants/theme/_constants";

type ScreenObjType = {
  screenProps: {},
  navigation: {}
};

type PayloadType = {
  type: string,
  state: {}
};

// get composed styles from received props
const styles = getStyles({}, "footerTabNavigation");

const PlayScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Play> => (
  <Play navigation={navigation} />
);

const AboutScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof About> => (
  <About navigation={navigation} />
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

const NotificationsScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Notifications> => (
  <Notifications navigation={navigation} />
);

const tabBarComponent = (props: {}): React$Element<*> => {
  const navEvent = (payload: PayloadType): void => {
    console.log(payload.type, Object.keys(payload));
  };
  const { orange, lavender } = theme.colors;
  const { width } = theme.layout;

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={navEvent} onDidFocus={navEvent} />
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
    profile: { screen: ProfileScreen },
    about: { screen: AboutScreen },
    notifications: { screen: NotificationsScreen }
  },
  {
    tabBarComponent,
    lazy: true
  }
);

export default FooterTabNavigation;
