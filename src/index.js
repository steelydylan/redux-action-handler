export default class ActionHandler {

  constructor(initialState) {
    this.initialState = initialState;
    this.actions = [];
  }

  addCase(type, reducer) {
    this.actions = [...this.actions, {
      type, reducer
    }];
  }

  create() {
    const { initialState, actions } = this;
    return (state = initialState, action) => {
      const { type } = action;
      const find = actions.find((item) => {
        if (item.type === type) {
          return true;
        }
        return false;
      });
      if (find) {
        return find.reducer(state, action);
      } else {
        return state;
      }
    }
  }
}