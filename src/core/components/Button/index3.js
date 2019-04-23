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
import { Theme } from "../../constants";
import {
  getComposedStyles,
  getIconType,
  normalizeText,
  log
} from "../../utils";

import Text from "../Text";

// define component styles
const styles = StyleSheet.create({
  default: {
    ...Theme.button.default
  }
});

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
  styles?: {
    container: ?TextStyle,
    button: ?TextStyle,
    text: ?TextStyle
  },
  raised?: boolean,
  large?: boolean,
  info?: boolean
};
type PropsType = {
  ...TextProps,
  children: string,
  ...DefaultPropsType
};
type StateType = {};
type ButtonType = typeof TouchableHighlight | typeof TouchableNativeFeedback;
type ClassnameStylesType = {
  activityIndicator?: TextStyle,
  container?: TextStyle,
  button?: TextStyle,
  text?: TextStyle
};
type ComponentStylesType = {
  default: ?ClassnameStylesType,
  composed: ?ClassnameStylesType,
  custom: ?ClassnameStylesType
};
type TransformedDataType = {
  rightIconElement: {},
  leftIconElement: {},
  loadingElement: {},
  NativeButton: ButtonType,
  customStyles: ?TextStyle,
  textProps: {},
  btnProps: {},
  newProps: {}
};
type RootType = ?React$Element<NativeText>;
type TextType = ?React$Element<string>;

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
    styles: { container: null, button: null, text: null },
    raised: false,
    large: false,
    info: false
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
    return {
      default: styles.default,
      composed: getComposedStyles(this.props, this.cName),
      custom: this.props.styles
    };
  }

  /**
   * get transform styles from received props
   *
   * - respect the entered order of custom props
   */
  getTransformedData(): TransformedDataType {
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
          newProp = this.defineProp(key, prop);
          newProps = {
            ...newProps,
            ...newProp
          };
        }
      }
    );

    // include style prop definition, note that user styles have priority
    newProps.style = [styles.default, this.getComposedStyles(), style];

    return { text, newProps };
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
      rightIconElement,
      leftIconElement,
      loadingElement,
      NativeButton,
      customStyles,
      textProps,
      newProps
    } = this.getTransformedData();

    const {
      loadingRight,
      iconRight,
      disabled,
      children,
      onPress,
      loading,
      icon
    } = this.props();

    const styles = this.getStyles();

    // note that the user styles have priority
    const containerStyles = [
      styles.default.container,
      styles.composed.container,
      styles.custom.container
    ];
    const buttonStyles = [
      styles.default.button,
      styles.composed.button,
      styles.custom.button
    ];
    const textStyles = [
      styles.default.text,
      styles.composed.text,
      styles.custom.text
    ];

    return (
      <View style={containerStyles}>
        <NativeButton
          ref={this.setButtonRef}
          disabled={disabled}
          onPress={onPress}
          {...newProps}
        >
          <View pointerEvents="box-only" style={buttonStyles}>
            {(icon && !iconRight) || leftIconElement ? leftIconElement : null}
            {loading && !loadingRight && loadingElement}
            <Text style={textStyles} {...textProps}>
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
