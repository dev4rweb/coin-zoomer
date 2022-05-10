import {FETCH_SUBSCRIBERS} from "../utils/reducerConsts";

const defaultState= {
    subscribers: []
}

export default function subscribeReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_SUBSCRIBERS:
            return {
                ...state,
                subscribers: action.payload
            }
        default:
            return state
    }
};

export const fetchSubscribersAction = subscribers => ({type: FETCH_SUBSCRIBERS, payload: subscribers})
