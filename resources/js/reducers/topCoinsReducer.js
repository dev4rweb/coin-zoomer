import {SET_TOP_COINS_BY_DAY, SET_TOP_COINS_BY_HOUR, SET_TOP_COINS_BY_WEEK} from "../utils/reducerConsts";

const defaultState = {
    topCoinsByHour: null,
    topCoinsByDay: null,
    topCoinsByWeek: null,
}

export default function topCoinsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOP_COINS_BY_HOUR:
            return {
                ...state,
                topCoinsByHour: action.payload
            }
        case SET_TOP_COINS_BY_DAY:
            return {
                ...state,
                topCoinsByDay: action.payload
            }
        case SET_TOP_COINS_BY_WEEK:
            return {
                ...state,
                topCoinsByWeek: action.payload
            }
        default:
            return state
    }
};

export const setTopCoinsByHourAction = topCoins => ({type: SET_TOP_COINS_BY_HOUR, payload: topCoins})
export const setTopCoinsByDayAction = topCoins => ({type: SET_TOP_COINS_BY_DAY, payload: topCoins})
export const setTopCoinsByWeekAction = topCoins => ({type: SET_TOP_COINS_BY_WEEK, payload: topCoins})
