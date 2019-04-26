/**
 * ./src/core/components/Hamburger/index.js
 *
 * @flow
 */

import { View, Animated, TouchableWithoutFeedback } from "react-native";
import React, { Component } from "react";

import { getStyles } from "../../utils";
import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  onPress: () => void,
  active: boolean,
  type: ?string,
  theme?: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {
  active: boolean
};
type ComponentStylesType =
  | { containerIn: ?number, container: ?number }
  | StyleSheetType;
type RootType = ?React$Element<TouchableWithoutFeedback>;
type AnimatedType = { interpolate: ({}) => {} };

/**
 * Hamburger component
 */
export default class Hamburger extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "hamburger";

  /**
   * styles def for the component
   * @type {Object}
   */
  styles: ComponentStylesType = {
    containerIn: null,
    container: null
  };

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    active: false,
    type: "cross",
    theme: null,
    onPress: (): void => {}
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    this.state = { active: false };
    // get composed styles from received props
    this.styles = getStyles(this.props, this.cName);

    this.setHamburgerRef = (element: RootType): void => {
      this._root = element;
    };
  }

  componentWillReceiveProps(nextProps: { active?: boolean }): void {
    const { active } = this.state;

    if (nextProps.active !== active) {
      this.setState({ active: !active });
      this._animate();
    }
  }

  /**
   * the ref function
   * @type {React.Element}
   */
  setHamburgerRef: RootType => void;

  middleBar: AnimatedType;

  outsideBar: AnimatedType;

  cross(): void {
    const { active } = this.props;
    if (!active) {
      Animated.spring(this.outsideBar, {
        useNativeDriver: true,
        duration: 450,
        toValue: 1
      }).start();
      Animated.timing(this.middleBar, {
        useNativeDriver: true,
        duration: 250,
        toValue: 1
      }).start();
    } else {
      Animated.spring(this.middleBar, {
        useNativeDriver: true,
        duration: 150,
        toValue: 0
      }).start();
      Animated.spring(this.outsideBar, {
        useNativeDriver: true,
        duration: 450,
        toValue: 0
      }).start();
    }
  }

  _animate(): void {
    const {
      props: { type }
    } = this;

    console.log("_animate", type);

    this.cross();
  }

  /**
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * the ref element
   * @type {Object|null}
   */
  styles: ComponentStylesType;

  /**
   * render Hamburger component
   */
  render(): React$Element<typeof TouchableWithoutFeedback> {
    const {
      props: { active, onPress }
    } = this;

    const barStyles = {
      backgroundColor: "white",
      borderRadius: 3,
      height: 3,
      width: 22
    };

    if (active) {
      this.middleBar = this.middleBar || new Animated.Value(1);
      this.outsideBar = this.outsideBar || new Animated.Value(1);
    }

    this.middleBar = this.middleBar || new Animated.Value(0);
    this.outsideBar = this.outsideBar || new Animated.Value(0);

    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={this.styles.containerIn}>
            <Animated.View
              style={{
                ...barStyles,
                transform: [
                  {
                    translateY: this.outsideBar.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 8]
                    })
                  },
                  {
                    rotate: this.outsideBar.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "45deg"]
                    })
                  }
                ]
              }}
            />
            <Animated.View
              style={{
                marginBottom: 5,
                marginTop: 5,
                ...barStyles,
                opacity: this.middleBar.interpolate({
                  inputRange: [0, 0.2, 1],
                  outputRange: [1, 0.2, 0]
                }),
                transform: [
                  {
                    translateX: this.middleBar.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -28]
                    })
                  }
                ]
              }}
            />
            <Animated.View
              style={{
                ...barStyles,
                transform: [
                  {
                    translateY: this.outsideBar.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -8]
                    })
                  },
                  {
                    rotate: this.outsideBar.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "-45deg"]
                    })
                  }
                ]
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
