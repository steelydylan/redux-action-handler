declare module 'redux-action-handler' {
  interface Payload {
    [x: string]: any 
  }
  interface Action<State> {
    type: string;
    reducer: Reducer<State>;
  }
  type Reducer<State> = (state: State, payload: Payload) => State;
  export default class ActionHandler<State> {
    private initialState;
    private actions;
    constructor(initialState: State);
    addCase(type: string, reducer: Reducer<State>): void;
    create(): (state: State, action: Action<State>) => State;
  }
}