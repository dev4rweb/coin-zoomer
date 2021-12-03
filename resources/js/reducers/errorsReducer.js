import {SET_ERORRS} from "../utils/reducerConsts";

const defaultState = {
    errors: {}
}

export default function errorsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ERORRS:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
};

export const setErrorsAction = errors => ({type: SET_ERORRS, payload: errors})
