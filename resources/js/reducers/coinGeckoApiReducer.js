import {
    GECKO_COINS_CURRENT,
    GECKO_COINS_LIST,
    GECKO_COINS_MARKETS,
    GECKO_PING,
    SET_TOP_COINS_GECKO
} from "../utils/reducerConsts";

const defaultState = {
    isPing: false,
    coinsList: [],
    coinsMarkets: [],
    currentCoin: null,
    topCoinsGecko: []
}

export default function coinGeckoApiReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOP_COINS_GECKO:
            return {
                ...state,
                topCoinsGecko: [...state.topCoinsGecko, action.payload]
            }
        case GECKO_PING:
            return{
                ...state,
                isPing: action.payload
            }
        case GECKO_COINS_LIST:
            return {
                ...state,
                coinsList: action.payload
            }
        case GECKO_COINS_MARKETS:
            return {
                ...state,
                coinsMarkets: action.payload
            }
        case GECKO_COINS_CURRENT:
            return {
                ...state,
                currentCoin: action.payload
            }
        default:
            return state
    }
};

export const setGeckoPingAction = isPing => ({type: GECKO_PING, payload: isPing})
export const setGeckoCoinsListAction = coinsList => ({type: GECKO_COINS_LIST, payload: coinsList})
export const setGeckoCoinsMarketAction = coinsMarket => ({type: GECKO_COINS_MARKETS, payload: coinsMarket})
export const setGeckoCurrentCoinAction = currentCoin => ({type: GECKO_COINS_CURRENT, payload: currentCoin})
export const setTopCoinsGeckoAction = coin => ({type: SET_TOP_COINS_GECKO, payload: coin})
