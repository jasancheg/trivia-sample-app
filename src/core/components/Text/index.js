/**
 * ./src/core/components/Text/index.js
 *
 * @flow
 */

import { Text as NativeText } from "react-native";
import type { TextProps } from "react-native";
import React, { Component } from "react";

import _capitalize from "lodash/capitalize";
import _isString from "lodash/isString";
import _isNumber from "lodash/isNumber";
import _truncate from "lodash/truncate";
import _toUpper from "lodash/toUpper";
import _toLower from "lodash/toLower";

import { getStyles, defineProp } from "../../utils";
import type { StyleSheetType } from "../../flow";

// flow types
type DefaultPropsType = {
  capitalize?: boolean,
  uppercase?: boolean,
  lowercase?: boolean,
  truncate?: boolean,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  justify?: boolean,
  danger?: boolean,
  italic?: boolean,
  center?: boolean,
  right?: boolean,
  info?: boolean,
  note?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  theme?: ?{}
};
type PropsType = {
  ...TextProps,
  children: string,
  ...DefaultPropsType
};
type StateType = {};
type ComponentStylesType = { text: ?number } | StyleSheetType;
type RootType = ?React$Element<NativeText>;
type TextType = ?(React$Element<string> | string);

/**
 * Text component
 */
export default class Text extends Component<PropsType, StateType> {
  /**
   * component ID name
   * @type {string}
   */
  cName: string = "text";

  /**
   * [listOfCustomProps description]
   * @type {Array}
   */
  listOfCustomProps = [
    "capitalize",
    "uppercase",
    "lowercase",
    "truncate",
    "primary",
    "success",
    "warning",
    "justify",
    "danger",
    "italic",
    "center",
    "right",
    "style",
    "info",
    "note",
    "h1",
    "h2",
    "h3",
    "h4"
  ];

  /**
   * define the list of allowed custom props and set default
   * @type {object}
   */
  static defaultProps: DefaultPropsType = {
    capitalize: false,
    uppercase: false,
    lowercase: false,
    truncate: false,
    primary: false,
    success: false,
    warning: false,
    justify: false,
    danger: false,
    italic: false,
    center: false,
    right: false,
    style: null,
    info: false,
    note: false,
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    theme: null
  };

  constructor(props: PropsType): void {
    super((props: PropsType));

    this._root = null;
    this.styles = {
      text: null
    };

    this.setTextRef = (element: RootType): void => {
      this._root = element;
    };
  }

  /**
   * the ref function
   * @type {React.Element}
   */
  setTextRef: RootType => void;

  /**
   * get composed styles from received props
   * - respect the entered order of custom props
   */
  getStyles(): ComponentStylesType {
    return getStyles(this.props, this.cName);
  }

  /**
   * apply 'text' transforms and stylized component
   *
   * - respect the entered order of custom props
   */
  denormalize(): { text: TextType, newProps: {} } {
    const listOfTransformProps = [
      "capitalize",
      "uppercase",
      "lowercase",
      "truncate"
    ];
    const { children, truncate, style } = this.props;
    const keys = Object.keys(this.props);
    let text: TextType = children;
    let newProps = {};
    let newProp;

    // - because it must iterate over all props in the same received order
    keys.forEach(
      (key: string): void => {
        const { [key]: prop } = this.props;

        // - when it is a transform prop
        if (listOfTransformProps.indexOf(key) > -1 && prop) {
          switch (key) {
            case "truncate":
              text = this.truncate(text, truncate);
              break;
            case "capitalize":
              text = _isString(text) ? _capitalize(text) : text;
              break;
            case "uppercase":
              text = _isString(text) ? _toUpper(text) : text;
              break;
            case "lowercase":
              text = _isString(text) ? _toLower(text) : text;
              break;
            default:
          }
        }

        // - or when prop does not exist filter|extract as new prop
        if (this.listOfCustomProps.indexOf(key) === -1) {
          newProp = defineProp(key, prop);
          newProps = {
            ...newProps,
            ...newProp
          };
        }
      }
    );

    // initialize and add styles definition
    this.styles = this.getStyles();
    // initialize and add styles definition
    newProps.style = style ? [this.styles.text, style] : this.styles.text;

    return { text, newProps };
  }

  /**
   * cut a string in the character number that is indicated
   * @param  {string} text: TextType  the received text
   * @return {mixed}                  the transformed text or received param
   */
  truncate(text: TextType, value: string | number): TextType {
    const length = parseInt(value, 10);
    const conf = {
      separator: "...",
      length
    };

    return _isString(text) && _isNumber(length) ? _truncate(text, conf) : text;
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
   * render Text component
   */
  render(): React$Element<typeof NativeText> {
    // apply transforms to the received data and extract needed props
    const { text, newProps } = this.denormalize();

    return (
      <NativeText ref={this.setTextRef} {...newProps}>
        {text}
      </NativeText>
    );
  }
}
