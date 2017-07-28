import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumberEasing from 'react-number-easing';
import styles from './Counter.css';

const TICKER_UPDATE_INTERVAL_MS = 10 * 1000;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { timerId: null };
  }

  componentDidMount() {
    const { fetchTicker } = this.props;

    this.state.timerId = setInterval(() => {
      fetchTicker();
    }, TICKER_UPDATE_INTERVAL_MS);
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        {/* <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div> */}
        <div className={`counter ${styles.counter}`} data-tid="counter">
          <NumberEasing
            value={counter}
            speed={400}
            ease="quintInOut"
          />
        </div>
        {/* <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
