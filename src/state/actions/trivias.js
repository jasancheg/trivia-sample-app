/**
 * ./src/actions/trivias.js
 *
 * @flow
 */

import axios from "axios";

import types from "../../core/constants/state/types";

type DispatchType = ({type: ?string, payload: mixed }) => mixed;
type OptionsType = { amount: number, difficulty: string }
type CBType = () => void;

const baseOpts = { 
  difficulty: "hard",
  amount: 10
};

const buildTriviaUrl = ({ difficulty, amount }) => {  
  const TRIVI_URL = "https://opentdb.com/api.php";
  return `${TRIVI_URL}?amount=${amount}&difficulty=${difficulty}&type=boolean`;
};

export const fetchTrivias = (options: OptionsType = baseOpts, cb: CBType) => async (dispatch: DispatchType): Promise<mixed> => {
  dispatch({ type: types.TRIVIAS_FETCH, payload: ["jojo"] });

  try {
    const url = buildTriviaUrl(options);
    
    let { data } = await axios.get(url);

    console.log(data);
    dispatch({ type: types.TRIVIAS_FETCHED, payload: data });
    cb();
  } catch(e) {
    console.error(e);
  }
};
