import { combineReducers } from 'redux';
import { RootReducer } from './types';

import welcome from './packages/welcome';

const rootReducer: RootReducer = combineReducers({
  welcome: welcome.reducer,
});

export default rootReducer;
