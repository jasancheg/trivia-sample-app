import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Title, Text, Deck } from "../../core/components";
import actions from "../../state/actions";
import { assets } from "../../core/utils";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

class Play extends Component {
  static navigationOptions = {
    title: "Play"
  };

  onButtonPress = () => {
    console.log("ha entrado", this.props);
    const options = { 
      difficulty: "hard",
      amount: 10
    };
  
    this.props.fetchTrivias(options, () => {
      console.log('yeah que termino', this.props);
      //this.props.navigation.navigate('deck');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Are you ready for the challenge?</Title>
        <View style={styles.title}>
          <Text uppercase bold>Are you ready for the challenge?</Text>
        </View>
      </View>

    );
  }


  // <Deck
  //   data={DATA}
  //   renderCard={this.renderCard}
  //   renderNoMoreCards={this.renderNoMoreCards}
  // />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7"
  },
  title: {
    backgroundColor: "#3C7F75",
    borderRadius: 6,
    padding: 10,
    margin: 10
  }
});

function mapStateToProps(state) {
  console.log("STATE", state);

  return {
      statex: state
  };
}

export default connect(mapStateToProps, actions)(Play);

