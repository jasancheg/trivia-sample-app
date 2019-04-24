import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
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
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
        <View>
          <Text> Home </Text>
        </View>
      </View>
    );
  }
}
