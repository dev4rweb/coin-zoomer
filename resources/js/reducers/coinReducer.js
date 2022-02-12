import {ADD_COIN, ADD_VOTE, FETCH_COINS, SET_CURRENT_INNER_COIN, SET_TABLE_RATE_LIMIT} from "../utils/reducerConsts";

const defaultState = {
    addCoin: {
        name: '',
        description: '',
        price: '',
        symbol: '',
        market_cap: '',
        launch_date: '',
        is_coin_gecko: true,
        is_presale: false,
        coin_gecko_link: '',
        contractTelegram: '',
        contractTwitter: '',
        contractReddit: '',
        contractWeb: '',
        contractDiscord: '',
        logotype: '',
        contractAdditional: '',
        email: '',
        telegram: ''
    },
    coins: [],
    currentInnerCoin: null,
    tableRateLimit: 10
}

export default function coinReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COIN:
            return {
                ...state,
                addCoin: action.payload
            }
        case FETCH_COINS:
            return {
                ...state,
                coins: action.payload
            }
        case SET_CURRENT_INNER_COIN:
            return {
                ...state,
                currentInnerCoin: action.payload
            }
        case SET_TABLE_RATE_LIMIT:
            return {
                ...state,
                tableRateLimit: action.payload
            }
        case ADD_VOTE:
            const coins = state.coins
            const coin = coins.find(i => i.id === action.payload.coin_id)
            coin.votes.push(action.payload)
            return {
                ...state,
                coins: coins
            }
        default:
            return state
    }
};

export const addCoinAction = addCoin => ({type: ADD_COIN, payload: addCoin})
export const fetchCoinAction = coins => ({type: FETCH_COINS, payload: coins})
export const setCurrentInnerCoinAction = coin => ({type: SET_CURRENT_INNER_COIN, payload: coin})
export const setTableRateLimitAction = limit => ({type: SET_TABLE_RATE_LIMIT, payload: limit})
export const addVoteAction = vote => ({type: ADD_VOTE, payload: vote})
