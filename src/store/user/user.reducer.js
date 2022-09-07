import { USER_ACTION_TYPES } from "./user.types";

//initial state for second argument of reducer
export const USER_INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

//state needs default value && return default state (because actions are passed to all reducers)
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {...state, currentUser: null}
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
			return{
				...state,
				currentUser: payload,
			}
		default:
			return state;
	}
};
