import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Sample from '../components/sample';

class App extends React.Component {
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
