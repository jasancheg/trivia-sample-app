/**
 * ./src/core/components/Button/index.js
 *
 * @flow
 */
/* eslint-disable */

import type { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import type { TextProps } from "react-native";

import React, { Component } from "react";
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Text as NativeText,
  ActivityIndicator,
  StyleSheet,
  Platform,
  View
} from "react-native";
import { theme } from "../../constants";
import {
  normalizeText,
  getIconType,
  defineProp,
  getStyles,
  log
} from "../../utils";

import type { StyleSheetType } from "../../flow";

import Text from "../Text";

// flow types
type DefaultPropsType = {
  loadingRight?: boolean,
  transparent?: boolean,
  secondary?: boolean,
  iconRight?: boolean,
  onPress?: () => void,
  loading?: ?React$Element<*>,
  rounded?: boolean,
  outline?: boolean,
  disabled?: boolean,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  raised?: boolean,
  large?: boolean,
  info?: boolean,
  customStyles?: ?{}
};
type PropsType = {
  children: string | React$Element<typeof Text>,
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType =
  | {
      activityIndicator: ?number,
      container: ?number,
      button: ?number,
      text: ?number
    }
  | StyleSheetType;
type ButtonType = typeof TouchableHighlight | typeof TouchableNativeFeedback;
type RootType = ?React$Element<ButtonType>;

type TextType = ?React$Element<string>;
type TransformedDataType = {
  rightIconElement: {},
  leftIconElement: {},
  loadingElement: {},
  NativeButton: ButtonType,
  customStyles: ?{},
  textProps: {},
  btnProps: {},
  newProps: {}
};

/**
 * Text component
 */
export default class Button extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "button";

  /**
   * [listOfCustomProps description]
   * @type {Array}
   */
  listOfCustomProps = [
    "loadingRight",
    "transparent",
    "secondary",
    "iconRight",
    "onPress",
    "loading",
    "rounded",
    "outline",
    "disabled",
    "primary",
    "success",
    "warning",
    "danger",
    "styles",
    "raised",
    "large",
    "info"
  ];

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    loadingRight: false,
    transparent: false,
    secondary: false,
    iconRight: false,
    onPress: log,
    loading: null,
    rounded: false,
    outline: false,
    disabled: false,
    primary: false,
    success: false,
    warning: false,
    danger: false,
    raised: false,
    large: false,
    info: false,
    customStyles: null
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;

    this.setButtonRef = (element: RootType): void => {
      this._root = element;
    };
  }

  /**
   * the ref function
   * @type {React.Element}
   */
  setButtonRef: (element: RootType) => void;

  /**
   * get composed styles from received props
   *
   * - respect the entered order of custom props
   */
  getStyles(): ComponentStylesType {
    return getStyles(this.props, this.cName);
  }

  /**
   * get transform styles from received props
   *
   * - respect the entered order of custom props
   */
  denormalize(): TransformedDataType {
    const listOfTransformProps = ["small", "big"];
    const { children, styles } = this.props;
    const keys = Object.keys(this.props);
    let text: TextType = children;
    let newProps = {};
    let newProp;

    // apply custom styles to each prop in the same received order,
    // so it should iterate over all received props
    keys.forEach(
      (key: string): void => {
        const { [key]: prop } = this.props;
        if (listOfTransformProps.indexOf(key) > -1 && prop) {
          switch (key) {
            case "truncate":
              break;
            default:
          }
        }
        // filter new props
        if (this.listOfCustomProps.indexOf(key) === -1) {
          newProp = defineProp(key, prop);
          newProps = {
            ...newProps,
            ...newProp
          };
        }
      }
    );

    return {
      rightIconElement,
      leftIconElement,
      loadingElement,
      NativeButton,
      customStyles,
      textProps,
      newProps
    };
  }

  /**
   * the ref element
   * @type {React.Element}
   */
  _root: RootType;

  /**
   * render Button component
   */
  render(): React$Element<ButtonType> {
    const {
      loadingRight,
      iconRight,
      disabled,
      children,
      onPress,
      loading,
      icon
    } = this.props;

    const {
      rightIconElement,
      leftIconElement,
      loadingElement,
      NativeButton,
      customStyles,
      textProps,
      newProps
    } = this.denormalize();

    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <NativeButton
          ref={this.setButtonRef}
          disabled={disabled}
          onPress={onPress}
          {...newProps}
        >
          <View pointerEvents="box-only" style={styles.button}>
            {(icon && !iconRight) || leftIconElement ? leftIconElement : null}
            {loading && !loadingRight && loadingElement}
            <Text style={styles.text} {...textProps}>
              {children}
            </Text>
            {(icon && iconRight) || rightIconElement ? rightIconElement : null}
            {loading && loadingRight && loadingElement}
          </View>
        </NativeButton>
      </View>
    );
  }
}
