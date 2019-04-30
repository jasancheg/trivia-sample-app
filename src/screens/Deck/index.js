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
    const initialRegion = {
      longitude: trivia.longitude,
      latitude: trivia.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <View title={trivia.triviatitle}>
        <View style={styles.detailWrapper}>
          <Text>{trivia.company}</Text>
          <Text>{trivia.formattedRelativeTime}</Text>
        </View>
        <Text>
          algo aquí
        </Text>
      </View>
    );
  }

  renderNoMoreCards = () => {
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
    console.log("this.props", this.props);
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
            <Text style={styles.text}>{JSON.stringify(questions)}</Text>
          </View>
          <View style={{ marginTop: 10, background: 'green', padding: 20 }}>
            <Swipe
              data={questions}
              renderCard={this.renderCard}
              renderNoMoreCards={this.renderNoMoreCards}
              onSwipeRight={trivia => this.props.chooseYes(trivia)}
              keyProp="triviakey"
            />
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
