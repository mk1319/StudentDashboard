import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./Reducer";

const middleware = [thunk];
const composeEnhancers = compose;

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
