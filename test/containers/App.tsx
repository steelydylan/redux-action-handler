import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as React from 'react';
import * as Actions from '../actions';
import * as Sample from '../components/sample';

interface Prop {
  count: Number
}

class App extends React.Component<Prop> {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (<div>
      <p>カウント数: {this.props.count}</p>
      <Sample {...props}/>
    </div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
