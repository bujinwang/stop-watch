import React, {Component} from 'react';

export default class Timer extends Component {
  ticker() {
    this.setState(
      {
        clock: new Date() - this.props.start
      });
  }

  componentDidMount() {
    setInterval(this.ticker, 15);
  }

  constructor(props) {
    super(props);
    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }

  render() {
    return (
      <div>
        <p>you have been on this site since: </p><br/>
        <span>{Math.round(this.state.clock / 1000)}</span>
        <p>Seconds</p>
      </div>
    );
  }
}

