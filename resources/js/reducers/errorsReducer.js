import {SET_ERRORS, SET_LOADING} from "../utils/reducerConsts";

const defaultState = {
    errors: {},
    loading: false
}

export default function errorsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
};

export const setErrorsAction = errors => ({type: SET_ERRORS, payload: errors})
export const setLoadingAction = isLoading => ({type: SET_LOADING, payload: isLoading})
