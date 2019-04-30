/**
 * ./src/core/constants/state/state.js
 *
 * @flow
 */

export const triviaInitialState = {
  index: 0,
  loading: false,
  active: false,
  scores: {
    hard: [],
    medium: [],
    easy: []
  },
  questions: [],
  tests: [
    {
      difficulty: "hard",
      amound: 10,
      level: 1
    },
    {
      difficulty: "hard",
      amound: 20,
      level: 2
    },
    {
      difficulty: "medium",
      amound: 10,
      level: 1
    },
    {
      difficulty: "medium",
      amound: 20,
      level: 2
    },
    {
      difficulty: "easy",
      amound: 10,
      level: 1
    },
    {
      difficulty: "easy",
      amound: 20,
      level: 2
    }
  ]
};

export const userInitialState = {
  username: ""
};

export const appInitialState = {
  loading: false,
  config: null
};

export const navInitialState = {
  openedSideNav: false,
  page: "play"
};
