import {SET_ERRORS} from "../utils/reducerConsts";

const defaultState = {
    errors: {}
}

export default function errorsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
};

export const setErrorsAction = errors => ({type: SET_ERRORS, payload: errors})
