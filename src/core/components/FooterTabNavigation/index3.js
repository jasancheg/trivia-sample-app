/* eslint-disable react/display-name */
/**
 * ./src/core/components/FooterTabNavigation/index.js
 *
 * @flow
 */

import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationEvents
} from "react-navigation";
import { View, Platform } from "react-native";
import { Svg } from "expo";

import HomeScreen from "../../../screens/Home";
import ScoreScreen from "../../../screens/Orders";
import AboutScreen from "../../../screens/Search";
import ProfileScreen from "../../../screens/Profile";

import { theme } from "../../constants";
import { getStyles } from "../../utils";
import FooterNav from "../FooterNav";
import TabBarIcon from "../TabBarIcon";

import { footerNavHeight } from "../../constants/theme/_constants";

type FocusedType = {
  focused: boolean
};

type PayloadType = {
  type: string,
  state: {}
};

const styles = getStyles({}, "footerTabNavigation");

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }: FocusedType): React$Element<typeof TabBarIcon> => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const ScoreStack = createStackNavigator({
  Score: ScoreScreen
});

ScoreStack.navigationOptions = {
  tabBarLabel: "Score",
  tabBarIcon: ({ focused }: FocusedType): React$Element<typeof TabBarIcon> => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: AboutScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }: FocusedType): React$Element<typeof TabBarIcon> => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const AboutStack = createStackNavigator({
  About: AboutScreen
});

AboutStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }: FocusedType): React$Element<typeof TabBarIcon> => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const tabBarComponent = (props: {}): React$Element<*> => {
  const navEvent = (payload: PayloadType): void => {
    console.log(payload.type, Object.keys(payload));
  };
  const { amethist, esmerald } = theme.colors;
  const { width } = theme.layout;

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={navEvent} onDidFocus={navEvent} />
      <View style={styles.bg}>
        <Svg height={footerNavHeight} width={width}>
          <Svg.Defs>
            <Svg.LinearGradient id="grad" x1="0" y1="0" x2={width} y2="0">
              <Svg.Stop offset="0" stopColor={amethist} stopOpacity="1" />
              <Svg.Stop offset="1" stopColor={esmerald} stopOpacity="1" />
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

export default createBottomTabNavigator({
  HomeStack,
  ScoreStack,
  ProfileStack
});



// const FooterTabNavigation = createBottomTabNavigator(
//   {
//     home: { screen: HomeStack },
//     about: { screen: AboutStack },
//     orders: { screen: ScoreStack },
//     profile: { screen: ProfileStack },
//   },
//   {
//     tabBarComponent,
//     lazy: true
//   }
// );

// export default FooterTabNavigation;

