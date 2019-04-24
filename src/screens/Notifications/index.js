import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Notifications extends Component {
  static navigationOptions = {
    title: "Notifications"
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
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
        <View>
          <Text> Notifications </Text>
        </View>
      </View>
    );
  }
}
