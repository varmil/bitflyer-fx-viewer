// @flow
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
export const TICKER_FETCH_SUCCEEDED = 'TICKER_FETCH_SUCCEEDED';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function set() {
  return {
    type: SET_COUNTER
  };
}

export function fetchTicker() {
  return {
    type: 'TICKER_FETCH_REQUESTED'
  };
}
