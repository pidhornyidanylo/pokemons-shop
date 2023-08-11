import { createAction } from '../../utils/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../../utils/firebase.utils';


export const setUserActionStart = () => createAction(USER_ACTION_TYPES.SET_CURRENT_USER_START);
export const setUserActionSuccess = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS, user);
export const setUserActionFailed = (error) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER_FAILED, error);

export const fetchUserAction = () => async (dispatch) => {
    dispatch(setUserActionStart());

    try {
        const unsubscribe = onAuthStateChangedListener(user => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setUserActionSuccess(user));
        })
        return unsubscribe;
    } catch (error) {
        dispatch(setUserActionFailed(error))
    } 
}
