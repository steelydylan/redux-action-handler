import React, { Component, PropTypes } from 'react'

export default class Sample extends React.Component {
  render() {
    return (<div>
      <button onClick={() => this.props.increment()}>増加</button>
      <button onClick={() => this.props.decrement()}>減少</button>
    </div>);
  }
}

