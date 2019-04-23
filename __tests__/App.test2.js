/**
 * ./__tests__/App-test2.js
 *
 * @flow
 */

import React from "react";

import renderer from "react-test-renderer";

import App from "../App";

it("renders without crashing", (): void => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
