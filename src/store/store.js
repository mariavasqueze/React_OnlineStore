import { compose, applyMiddleware, legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

//Saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

//render logger only when is Not in production
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter(Boolean);

//if devtools use, otherwise use standard compose
const composedEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

//root reducer
export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);
// export const store = configureStore({reducer: rootReducer, undefined, composedEnhancers});

//run saga middleware
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
