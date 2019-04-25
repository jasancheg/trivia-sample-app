import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Score extends Component {
  static navigationOptions = {
    title: "Score History"
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
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
        <View>
          <Text> Score History </Text>
        </View>
      </View>
    );
  }
}
