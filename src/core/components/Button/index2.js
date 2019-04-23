/**
 * ./src/core/components/Button/index.js
 *
 * @flow
 */
/* eslint-disable operator-linebreak, nno-return-assign */

import PropTypes from "prop-types";
import React from "react";
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Text as NativeText,
  ActivityIndicator,
  StyleSheet,
  Platform,
  View
} from "react-native";

import colors from "../config/colors";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import getIconType from "../helpers/getIconType";
import normalize from "../helpers/normalizeText";
import ViewPropTypes from "../config/ViewPropTypes";

const log = () => {
  console.log("please attach method to this component"); //eslint-disable-line no-console
};

const Button = props => {
  const {
    loadingRight,
    transparent,
    secondary,
    iconRight,
    disabled,
    onPress,
    loading,
    rounded,
    outline,
    styles,
    raised,
    large,
    len
  } = props;

  let { rightIcon, leftIcon } = props;

  let leftIconElement;

  if (!leftIcon && icon) {
    leftIcon = icon;
  }
  if (leftIcon) {
    let Icon;
    if (iconComponent) {
      Icon = iconComponent;
    } else if (!leftIcon.type) {
      Icon = MaterialIcon;
    } else {
      Icon = getIconType(leftIcon.type);
    }
    leftIconElement = (
      <Icon
        {...leftIcon}
        color={leftIcon.color || "white"}
        size={leftIcon.size || (large ? 26 : 18)}
        style={[styles.icon, leftIcon.style && leftIcon.style]}
      />
    );
  }
  let rightIconElement;
  if (iconRight || rightIcon) {
    if (!rightIcon) {
      rightIcon = iconRight;
    }
    let Icon;
    if (iconComponent) {
      Icon = iconComponent;
    } else if (!rightIcon.type) {
      Icon = MaterialIcon;
    } else {
      Icon = getIconType(rightIcon.type);
    }
    rightIconElement = (
      <Icon
        {...rightIcon}
        color={rightIcon.color || "white"}
        size={rightIcon.size || (large ? 26 : 18)}
        style={[styles.iconRight, rightIcon.style && rightIcon.style]}
      />
    );
  }
  let loadingElement;
  if (loading) {
    loadingElement = (
      <ActivityIndicator
        animating={true}
        style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
        color={color || "white"}
        size={(large && "large") || "small"}
      />
    );
  }
  if (!Component && Platform.OS === "ios") {
    Component = TouchableHighlight;
  }
  if (!Component && Platform.OS === "android") {
    Component = TouchableNativeFeedback;
  }
  if (!Component) {
    Component = TouchableHighlight;
  }

  if (Platform.OS === "android" && (borderRadius && !attributes.background)) {
    if (Platform.Version >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple(
        "ThemeAttrAndroid",
        true
      );
    } else {
      attributes.background = TouchableNativeFeedback.SelectableBackground();
    }
  }

  const baseFont = {
    color: (textStyle && textStyle.color) || color || stylesObject.text.color,
    size:
      (textStyle && textStyle.fontSize) ||
      fontSize ||
      (!large && stylesObject.smallFont.fontSize) ||
      stylesObject.text.fontSize
  };

  let textOptions = {};
  if (textLen) {
    textOptions.numberOfLines = textLen;
  }

  const {
    containerStyles,
    buttonStyles,
    textStyles,
    newProps
  } = this.getTransformedData();

  const {
    containerComposedStyles,
    buttonComposedStyles
  } = this.getComposedStyles();

  return (
    <View
      style={[containerStyles, containerComposedStyles, containerCustomStyles]}
    >
      <Component onPress={onPress} disabled={disabled}>
        <View
          pointerEvents="box-only"
          style={[buttonStyles, buttonComposedStyles, style]}
        >
          {(icon && !iconRight) || leftIconElement ? leftIconElement : null}
          {loading && !loadingRight && loadingElement}
          <Text
            style={[textStyles, textComposedStyles, textCustomStyles]}
            {...textOptions}
          >
            {title}
          </Text>
          {loading && loadingRight && loadingElement}
          {(icon && iconRight) || rightIconElement ? rightIconElement : null}
        </View>
      </Component>
    </View>
  );
};

export default Button;
