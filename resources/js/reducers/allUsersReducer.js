import {FETCH_ALL_USERS} from "../utils/reducerConsts";

const defaultState = {
    users: []
}

export default function allUsersReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
};

export const fetchAllUsersAction = users => ({type: FETCH_ALL_USERS, payload: users})
