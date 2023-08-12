import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import createSagaMiddleware from 'redux-saga';

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";


const saga = createSagaMiddleware();


const middlewareEnhancer = applyMiddleware(logger, thunk, saga);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

saga.run(rootSaga);