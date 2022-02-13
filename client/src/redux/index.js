import { createStore, combineReducers, compose } from "redux";
import {
  CAPSULE_DATA_DISPLAY_MODE,
  SET_CAPSULES_DATA,
  SET_DISPLAY_MODE,
  SET_LANPAD_DATA,
  SET_LOADING,
} from "./actions";
import { assocPath } from "ramda";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";

const initialState = {
  capsulesData: [],
  landingPadData: [],
  displayMode: CAPSULE_DATA_DISPLAY_MODE,
  loading: false,
};

const reducers = {
  spaceData: (oldState = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SET_CAPSULES_DATA:
        return assocPath(["capsulesData"], payload, oldState);
      case SET_DISPLAY_MODE:
        return assocPath(["displayMode"], payload, oldState);
      case SET_LANPAD_DATA:
        return assocPath(["landingPadData"], payload, oldState);
      case SET_LOADING:
        return assocPath(["loading"], payload, oldState);
      default:
        return oldState;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(slices, composeEnhancers());

export default store;
