import { ActionWithPayload } from '../../types';
import { CHANGE_WELCOME } from './actionTypes';

const initialState = { welcomeString: 'Hello world' };

type Welcome = {
  welcomeString: string;
};

export default (state: Welcome = initialState, action: ActionWithPayload): Welcome => {
  switch (action.type) {
    case CHANGE_WELCOME:
      if (action.payload) {
        return {
          ...state,
          welcomeString: typeof action.payload === 'string' ? action.payload : state.welcomeString,
        };
      }
      return state;
    default:
      return state;
  }
};
