import * as React from 'react'

interface Props {
  increment: () => {},
  decrement: () => {}
}

export default class Sample<Props> extends React.Component {
  render() {
    return (<div>
      <button onClick={() => this.props.increment()}>増加</button>
      <button onClick={() => this.props.decrement()}>減少</button>
    </div>);
  }
}

