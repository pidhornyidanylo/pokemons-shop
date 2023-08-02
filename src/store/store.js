import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlewareEnhancer = applyMiddleware(logger, thunk);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);