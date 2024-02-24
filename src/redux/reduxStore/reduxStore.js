import { combineReducers, createStore } from "redux";
import profileReducer from '../State/reducers/profileReducer'
import dialogsReducer from '../State/reducers/dialogsReducer'
import navBarReducer from '../State/reducers/navBarReducer'

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  navBarReducer: navBarReducer,
});

const store = createStore(reducers);

export default store;
