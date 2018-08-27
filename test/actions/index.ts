import * as types from '../constants/ActionTypes';

export const increment = () => ({ type: types.INCREMENT });

export const decrement = () => ({ type: types.DECREMENT });

export const rename = (name) => ({ type: types.RENAME, name: name });
