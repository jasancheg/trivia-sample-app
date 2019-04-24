import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Order extends Component {
  static navigationOptions = {
    title: "Orders History"
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
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
        <View>
          <Text> Orders History </Text>
        </View>
      </View>
    );
  }
}
