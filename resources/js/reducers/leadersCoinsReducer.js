import {
    SET_LEADERS_COINS_BY_DAY,
    SET_LEADERS_COINS_BY_MARKET_CAP,
    SET_LEADERS_COINS_BY_WEEK, SET_THE_BEST_LEADER
} from "../utils/reducerConsts";

const defaultState = {
    leadersDay: null,
    leadersWeek: null,
    leadersMarketCap: null,
    theBestLeader: null
}

export default function leadersCoinsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LEADERS_COINS_BY_WEEK:
            return {
                ...state,
                leadersWeek: action.payload
            }
        case SET_LEADERS_COINS_BY_DAY:
            return {
                ...state,
                leadersDay: action.payload
            }
        case SET_LEADERS_COINS_BY_MARKET_CAP:
            return {
                ...state,
                leadersMarketCap: action.payload
            }
        case SET_THE_BEST_LEADER:
            return {
                ...state,
                theBestLeader: action.payload
            }
        default:
            return state
    }
};

export const setLeadersCoinsByDayAction = leaderCoins => ({type: SET_LEADERS_COINS_BY_DAY, payload: leaderCoins})
export const setLeadersCoinsByWeekAction = leaderCoins => ({type: SET_LEADERS_COINS_BY_WEEK, payload: leaderCoins})
export const setLeadersCoinsByMarketCapAction = leaderCoins => ({type: SET_LEADERS_COINS_BY_MARKET_CAP, payload: leaderCoins})
export const setTheBestLeaderAction = bestCoin => ({type: SET_THE_BEST_LEADER, payload: bestCoin})
