/**
 * ./src/screens/Score/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Title, Text } from "../../core/components";
import actions from "../../state/actions";

// flow types
type DefaultPropsType = {};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};

/**
 * Play component screen
 */
class Score extends Component<PropsType, StateType> {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Title>Score History</Title>
            <Text> comming soon </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7"
  }
});

function mapStateToProps(state) {
  console.log("About", state);

  return {
      statey: state
  };
}

export default connect(mapStateToProps, actions)(Score);
