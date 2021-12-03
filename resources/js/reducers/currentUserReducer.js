import {SET_CURRENT_USER} from "../utils/reducerConsts";

const defaultState = {
    user: null
}

export default function currentUserReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export const setCurrentUserAction = user => ({type: SET_CURRENT_USER, payload: user})
