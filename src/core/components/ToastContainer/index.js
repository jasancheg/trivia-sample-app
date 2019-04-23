/**
 * ./src/core/components/ToastContainer/index.js
 *
 * @flow
 */
/* eslint-disable react/no-unused-state */

import React, { Component } from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";

import { Button } from "../Button";
import Toast from "../Toast";
import { Text } from "../Text";

import styles from "./styles";

// flow types
type PropsType = {};

type StateType = {
  buttonTextStyle?: string | number | {} | Array<*>,
  supportedOrientations?: {} | Array<string>,
  buttonStyle?: string | number | {} | Array<*>,
  textStyle?: string | number | {} | Array<*>,
  style?: string | number | {} | Array<*>,
  fadeAnim: string | number | {} | typeof Animated,
  modalVisible: boolean,
  onClose?: () => void,
  buttonText?: string,
  position?: string,
  text?: string,
  type?: string
};

type ToastInstanceType = ?{} | { _root: () => void } | void;

type ShowToastType = {
  supportedOrientations: {} | Array<string>,
  alignContent: string,
  buttonTextStyle: {},
  onClose: () => void,
  buttonText: string,
  position: string,
  duration: number,
  buttonStyle: {},
  textStyle: {},
  text: string,
  type: string,
  style: {}
};

class ToastContainer extends Component<PropsType, StateType> {
  static toastInstance: ToastInstanceType;

  static show({ ...config }: { config: ShowToastType }) {
    this.toastInstance._root.showToast(config);
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      modalVisible: false,
      fadeAnim: new Animated.Value(0)
    };
  }

  getToastStyle(): {} {
    const { fadeAnim } = this.state;

    return { opacity: fadeAnim };
  }

  getButtonText(buttonText?: string): string | void {
    if (buttonText) {
      if (buttonText.trim().length === 0) {
        return undefined;
      } else return buttonText;
    }

    return undefined;
  }

  showToast(config: ShowToastType) {
    const { fadeAnim } = this.state;
    const {
      supportedOrientations,
      buttonTextStyle,
      buttonStyle,
      buttonText,
      textStyle,
      position,
      duration,
      onClose,
      style,
      text,
      type
    } = config;

    this.setState({
      buttonText: this.getButtonText(buttonText),
      modalVisible: true,
      supportedOrientations,
      buttonTextStyle,
      buttonStyle,
      textStyle,
      position,
      onClose,
      style,
      text,
      type
    });

    if (duration > 0) {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200
        }).start();
        setTimeout(() => {
          this.setState({
            modalVisible: false
          });
        }, 500);
      }, duration);
    } else {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200
        }).start();
        setTimeout(() => {
          this.setState({
            modalVisible: false
          });
        }, 500);
      }, 1500);
    }
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200
    }).start();
  }

  closeToast(): boolean {
    const { onClose, fadeAnim } = this.state;

    if (onClose && typeof onClose === "function") {
      onClose();
    }

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200
    }).start();

    setTimeout(() => {
      this.setState({
        modalVisible: false
      });
    }, 500);

    return true;
  }

  render(): React$Element<*> | null {
    const { modalVisible } = this.state;

    if (modalVisible) {
      const {
        buttonTextStyle,
        buttonStyle,
        buttonText,
        textStyle,
        style,
        text,
        type
      } = this.state;

      return (
        <Animated.View style={[styles.toastContainer, this.getToastStyle()]}>
          <Toast
            style={style}
            danger={type == "danger"}
            success={type == "success"}
            warning={type == "warning"}
          >
            <Text style={textStyle}>{text}</Text>
            {buttonText && (
              <Button
                style={buttonStyle}
                onPress={(): boolean => this.closeToast()}
              >
                <Text style={buttonTextStyle}>{buttonText}</Text>
              </Button>
            )}
          </Toast>
        </Animated.View>
      );
    } else return null;
  }
}

export default ToastContainer;
