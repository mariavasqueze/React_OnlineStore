
import { compose, applyMiddleware, legacy_createStore, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";


import { rootReducer } from "./root-reducer";

//create middleware - before action hits the reducer
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );

const composedEnhancers = compose(applyMiddleware(...middleWares));

//root reducer
export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);
// export const store = configureStore({reducer: rootReducer, undefined, composedEnhancers});

