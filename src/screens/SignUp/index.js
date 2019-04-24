import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SignUp extends Component {
  static navigationOptions = {
    title: "SignUp"
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
        <Text> SignUp </Text>
      </View>
    );
  }
}
