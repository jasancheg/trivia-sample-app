/**
 * ./src/core/components/FooterTabNavigation/index.js
 *
 * @flow
 */

import React from "react";
import { createBottomTabNavigator, NavigationEvents } from "react-navigation";
import { View } from "react-native";
import Expo from "expo";

import Notifications from "../../../screens/Notifications";
import Profile from "../../../screens/Profile";
import Orders from "../../../screens/Orders";
import Search from "../../../screens/Search";
import Home from "../../../screens/Home";
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

const styles = getStyles({}, "footerTabNavigation");

const HomeScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Home> => (
  <Home navigation={navigation} />
);

const SearchScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Search> => (
  <Search navigation={navigation} />
);

const OrdersScreen = ({
  screenProps,
  navigation
}: ScreenObjType): React$Element<typeof Orders> => (
  <Orders navigation={navigation} />
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
  const { amethist, esmerald } = theme.colors;
  const { width } = theme.layout;

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={navEvent} onDidFocus={navEvent} />
      <View style={styles.bg}>
        <Expo.Svg height={footerNavHeight} width={width}>
          <Expo.Svg.Defs>
            <Expo.Svg.LinearGradient id="grad" x1="0" y1="0" x2={width} y2="0">
              <Expo.Svg.Stop offset="0" stopColor={amethist} stopOpacity="1" />
              <Expo.Svg.Stop offset="1" stopColor={esmerald} stopOpacity="1" />
            </Expo.Svg.LinearGradient>
          </Expo.Svg.Defs>
          <Expo.Svg.Rect
            x={0}
            y={0}
            width={width}
            height={footerNavHeight}
            strokeWidth={0}
            stroke="transparent"
            fill="url(#grad)"
          />
        </Expo.Svg>
      </View>
      <View style={styles.contents}>
        <FooterNav {...props} />
      </View>
    </View>
  );
};

const FooterTabNavigation = createBottomTabNavigator(
  {
    home: { screen: HomeScreen },
    search: { screen: SearchScreen },
    orders: { screen: OrdersScreen },
    profile: { screen: ProfileScreen },
    notifications: { screen: NotificationsScreen }
  },
  {
    tabBarComponent,
    lazy: true
  }
);

export default FooterTabNavigation;
