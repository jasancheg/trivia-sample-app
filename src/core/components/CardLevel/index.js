/**
 * ./src/core/components/Title/index.js
 *
 * @flow
 */

import React, { Component } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";

import { titleHeight, lavender } from "../../constants/theme/_constants";
import { theme } from "../../constants";
import { getStyles } from "../../utils";
import Text from "../Text";

import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  loading: boolean,
  theme?: ?{},
  children: string,
  lastScore: string,
  playedIn: string,
  onPress: () => void
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType =
  | { 
      container: ?number, 
      header: ?number, 
      body: ?number,
      footer: ?number,
      text: ?number 
  } | StyleSheetType;
type RootType = ?React$Element<typeof View>;

/**
 * CardLevel component
 */
class CardLevel extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "cardlevel";

  /**
   * styles def for the component
   * @type {Object}
   */
  styles: ComponentStylesType = {
    container: null, 
    header: null, 
    body: null,
    footer: null,
    text: null
  };

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    loading: false,
    theme: null,
    children: "",
    lastScore: "",
    playedIn: "",
    onPress: p => p
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    // get composed styles from received props
    this.styles = getStyles(this.props, this.cName);
    this.setCardLevelRef = (element: RootType): void => {
      this._root = element;
    };
  }

    /**
   * the ref function
   * @type {React.Element}
   */
  setCardLevelRef: RootType => void;

  /**
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * render SplashLoading component
   */
  render(): React$Element<typeof View> {
    const { 
      loading,
      children, 
      lastScore = "", 
      playedIn = "", 
      onPress = () => console.log("missing onPress event")
    } = this.props;
  
    const footerText = lastScore 
      ? `Last Score: ${lastScore} played in: ${playedIn}` 
      : "Play the first match";
  
    console.log("PROPS", this.props);
  
    return (
      <View style={this.styles.container}>
        <View style={this.styles.header}>
          <Text uppercase bold style={this.styles.text}>{children}</Text>
        </View>
        <View style={this.styles.body}>
          <View style={{ marginRight: 10 }}>
            {
              loading 
                ? <ActivityIndicator size="large" color={lavender} />
                : (<TouchableOpacity onPress={onPress}>
                    <Icon name="play-circle-outline" size={50} color="white" />
                  </TouchableOpacity>)
            }            
          </View>
        </View>
        <View style={this.styles.footer}>
          <Text style={this.styles.text}>
            {footerText}
          </Text>
        </View>
      </View> 
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.app.loading
  };
}

export default connect(mapStateToProps)(CardLevel);