interface Payload {
  [x: string]: any 
}

interface Action<State> {
  type: string 
  reducer: Reducer<State>;
}

type Reducer<State> = (state: State, payload: Payload) => State;

export default class ActionHandler<State> {

  private initialState: State

  private actions: Array<Action<State>>

  constructor(initialState: State) {
    this.initialState = initialState;
    this.actions = [];
  }

  public addCase(type: string, reducer: Reducer<State>) {
    this.actions = [...this.actions, {
      type, reducer
    }];
  }

  public create() {
    const { initialState, actions } = this;
    return (state: State = initialState, action : Action<State>) : State => {
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