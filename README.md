# redux-action-handler

## Install

```sh
$ npm install redux-action-handler --save
```

## Usage

reducer.js
```js
import * as types from '../constants/ActionTypes';
import ActionHandler from 'redux-action-handler';

const initialState = {
  count: 0
};

const handler = new ActionHandler(initialState);

handler.addCase(types.INCREMENT, (state, action) => {
  return Object.assign({}, state, { count: state.count + 1 });
});

handler.addCase(types.DECREMENT, (state, action) => {
  return Object.assign({}, state, { count: state.count - 1 });
});

export default handler.create();
```

equivalent to

```js
import * as types from '../constants/ActionTypes';
const initialState = {
  count: 0
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case: types.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case: types.DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}
```