import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
var store = null 
try {
  store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // NON COMPATIBLE PHONE to delete on production :
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
} catch (error) {   
  store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // NON COMPATIBLE PHONE to delete on production :
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
}

export default store;
