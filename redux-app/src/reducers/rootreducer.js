import counterReducer from "./counterreducer";
import productReducer from "./productsreducer";
import loginReducer from "./loginreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  fakestore: productReducer,
  login: loginReducer,
});

export default rootReducer;
