import counterReducer from "./counterreducer";
import productReducer from "./productsreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  fakestore: productReducer,
});

export default rootReducer;
