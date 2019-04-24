import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SignIn extends Component {
  static navigationOptions = {
    title: "SignIn"
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
        <Text> SignIn </Text>
      </View>
    );
  }
}
