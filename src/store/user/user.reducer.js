import { USER_ACTION_TYPES } from "./user.types";

//initial state for second argument of reducer
export const USER_INITIAL_STATE = {
	currentUser: null,
};

//state needs default value && return default state (because actions are passed to all reducers)
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};
