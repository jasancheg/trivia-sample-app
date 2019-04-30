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
type DefaultPropsType = {};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};

/**
 * Play component screen
 */
class Play extends Component<PropsType, StateType> {
  
  onButtonPress = (difficulty: string) => {
    console.log("ha entrado", this.props);
    const options = { 
      difficulty,
      amount: 10
    };
  
    this.props.fetchTrivias(options, () => {
      console.log('yeah que termino', this.props);
      //this.props.navigation.navigate('deck');
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Title>Are you ready for the challenge?</Title>
            <CardLevel difficulty={"hard"}>
              Level: Hard I - (10 questions)
            </CardLevel>
            <CardLevel difficulty={"hard"} amound={20}>
              Level: Hard II   -   (20 questions)
            </CardLevel>
            <CardLevel difficulty={"medium"}>
              Level: Medium I   -   (10 questions)
            </CardLevel>
            <CardLevel difficulty={"medium"} amound={20}>
              Level: Medium II   -   (20 questions)
            </CardLevel>
            <CardLevel difficulty={"easy"}>
              Level: easy I   -   (10 questions)
            </CardLevel>
            <CardLevel difficulty={"easy"} amound={20}>
              Level: easy II   -   (20 questions)
            </CardLevel>
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
  console.log("STATE", state);

  return {
      statex: state
  };
}

export default connect(mapStateToProps, actions)(Play);

