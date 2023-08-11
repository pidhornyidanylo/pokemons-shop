import { USER_ACTION_TYPES } from "./user.types";

const DEFAULT_STATE = {
    currentUser: null,
    error: null,
}

export const userReducer = ( state = DEFAULT_STATE, action = {} ) => {
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER_FAILED:
            return { ...state, error: payload, currentUser: null }
        case USER_ACTION_TYPES.SET_CURRENT_USER_START:
            return { ...state, error: null, currentUser: null }
        case USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS:
            return { ...state, error: null, currentUser: payload }
        default:
            return state;
    }
}