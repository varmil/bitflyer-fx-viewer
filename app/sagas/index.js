import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.bitflyer.jp/v1/',
});

const apiTicker = () => api.get('/ticker', { params: { product_code: 'FX_BTC_JPY' } });


// ----------------------------------------------------------------


function* fetchTicker() {
  try {
    const { data } = yield call(apiTicker);
    yield put({ type: 'TICKER_FETCH_SUCCEEDED', payload: data.ltp });
  } catch (e) {
    yield put({ type: 'TICKER_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeLatest('TICKER_FETCH_REQUESTED', fetchTicker);
}

export default mySaga;
