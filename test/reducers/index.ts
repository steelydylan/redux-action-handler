import * as types from '../constants/ActionTypes';
import ActionHandler from '../../src';

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

// handler.addCase(types.RENAME, (state, action) => {
//   return Object.assign({}, state, { rename: action.rename });
// });

export default handler.create();