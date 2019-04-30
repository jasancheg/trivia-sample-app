/**
 * ./src/screens/Play/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Title, Text, CardLevel } from "../../core/components";
import actions from "../../state/actions";
import { assets } from "../../core/utils";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

// flow types
type DefaultPropsType = {
  tests: Array<{
    difficulty: string,
    level: number,
    amound: number,
    index: number
  }>
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};

/**
 * Play component screen
 */
class Play extends Component<PropsType, StateType> {

  /**
   * styles def for the component
   * @type {Object}
   */

  onPress = (difficulty: string, amount: number, index: number) => {
    const options = { 
      difficulty,
      amount,
      index
    };
  
    this.props.fetchTrivia(options, () => {
      this.props.navigation.navigate('deck');
    });
  }

  render() {
    const { tests } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Title>Are you ready for the challenge?</Title>
            {
              tests.map((t, i) => {
                return (
                  <CardLevel 
                    key={i} 
                    index={i}
                    {...t} 
                    onPress={this.onPress}>
                    { `Level: ${t.difficulty} ${t.level === 2 ? "II" : "I"} - (${t.amound} questions)` }
                  </CardLevel>
                )
              })
            }
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
  return {
    tests: state.trivia.tests
  };
}

export default connect(mapStateToProps, actions)(Play);

