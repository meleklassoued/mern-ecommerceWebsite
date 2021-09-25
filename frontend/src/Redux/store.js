import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsDetails,
  getProductsReducer,
} from "./reducers/productReducers";
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getDetails: getProductsDetails,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
