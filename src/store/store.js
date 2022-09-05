import { compose, applyMiddleware, legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//render logger only when is Not in production
const middleWares = [
	process.env.NODE_ENV != "production" && logger,
	thunk,
].filter(Boolean);

//if devtools use, otherwise use standard compose
const composedEnhancer =
	(process.env.NODE_ENV != "production" &&
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

export const persistor = persistStore(store);
