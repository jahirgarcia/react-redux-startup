import { combineReducers } from '@reduxjs/toolkit';
import counterSlice, {
  counterReducerKey
} from '@features/counter/counterSlice';

const rootReducer = combineReducers({
  [counterReducerKey]: counterSlice
});

export default rootReducer;
