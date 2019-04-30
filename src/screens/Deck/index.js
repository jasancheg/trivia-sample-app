/**
 * ./src/screens/Score/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Title, Text, Swipe } from "../../core/components";
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
class Deck extends Component<PropsType, StateType> {
  renderCard(trivia) {
    console.log("trivia", trivia);
    return (
      <View style={{flex: 1}}>
        <View>
          <Text bold capitalize>{trivia.category}</Text>
        </View>
        <View>
          <Text>{trivia.difficulty}</Text>
        </View>
        <View>
          <Text>{trivia.question}</Text>
        </View>
        <View>
          <Text>{trivia.correct_answer}</Text>
        </View>
      </View>
    );
  }

  renderMarker = () => {
    return (
      <View title="Your puntuation">
        <Button
          title="Back to home"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate("play")}
        />
      </View>
    );
  }

  render() {
    const { test, questions } = this.props;
    const difficulty = `Level: ${test.difficulty}`;
    const level = `${test.level === 2 ? "II" : "I"}`;
    const questionsTxt = `(${test.amound} questions)`;
    const headerText = `${difficulty} ${level}  -  ${questionsTxt}`;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Title>{headerText}</Title>
            <Text style={styles.text}>Swipe the card to answer. Left is 'no' and right is 'yes'</Text>
            
          </View>
          <View style={{ flex: 1, marginTop: 10, background: 'green', padding: 20 }}>
            <Swipe
              data={questions}
              renderCard={this.renderCard}
              renderMarker={this.renderMarker}
              onSwipeRight={trivia => this.props.chooseYes(trivia)}
              onSwipeLeft={trivia => this.props.chooseNo(trivia)}
              keyProp="triviakey"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// <Text style={styles.text}>{JSON.stringify(questions)}</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7"
  },
  text: {
    padding: 10
  }
});

function mapStateToProps(state) {
  return {
    test: state.trivia.tests[state.trivia.index],
    questions: state.trivia.questions
  };
}

export default connect(mapStateToProps, actions)(Deck);
