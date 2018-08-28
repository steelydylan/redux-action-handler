declare module 'redux-action-handler' {
  type Reducer<State> = (state: State, payload: {}) => State;
  interface Action<State> {
    type: String;
    reducer: Reducer<State>;
  }
  export default class ActionHandler<State> {
    private initialState;
    private actions;
    constructor(initialState: State);
    addCase(type: String, reducer: Reducer<State>): void;
    create(): (state: State, action: Action<State>) => State;
  }
}