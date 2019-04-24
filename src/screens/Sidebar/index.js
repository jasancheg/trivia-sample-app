import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SideBar extends Component {
  static navigationOptions = {
    title: "SideBar"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: null,
          height: null
        }}
      >
        <Text> SideBar </Text>
      </View>
    );
  }
}
