import {GECKO_COINS_CURRENT, GECKO_COINS_LIST, GECKO_COINS_MARKETS, GECKO_PING} from "../utils/reducerConsts";

const defaultState = {
    isPing: false,
    coinsList: [],
    coinsMarkets: [],
    currentCoin: null
}

export default function coinGeckoApiReducer(state = defaultState, action) {
    switch (action.type) {
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
