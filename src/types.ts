import { Reducer, Action } from 'redux';

export type State = {
  welcome: {
    welcomeString: string;
  };
};

export type RootReducer = Reducer<State>;

export type ActionWithPayload = Action & {
  payload?: object | number | string | boolean;
};
