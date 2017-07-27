// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER, TICKER_FETCH_SUCCEEDED } from '../actions/counter';


type actionType = {
  +type: string,
  +payload: any
};

export default function counter(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case SET_COUNTER:
    case TICKER_FETCH_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
