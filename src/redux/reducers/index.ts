import { combineReducers } from 'redux';
import count from 'src/redux/reducers/count';

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
