//create middleware - before action hits the reducer
//reusable middleware function, chained functions
export const loggerMiddleWare = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}
	console.log("type: ", action.type);
	console.log("payload: ", action.payload);
	console.log("curentState: ", store.getState());

	//next state
	next(action);

	console.log("next state: ", store.getState());
};