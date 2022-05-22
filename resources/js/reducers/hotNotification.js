import {FETCH_NOTIFICATIONS} from "../utils/reducerConsts";

const defaultState = {
    hotNotifications: null
}

export default function hotNotification(state = defaultState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS:
            return {
                ...state,
                hotNotifications: action.payload
            }
        default:
            return state
    }
};

export const fetchHotNotificationsAction = notifications => ({type: FETCH_NOTIFICATIONS, payload: notifications})
