import {
    ADD_COIN,
    FETCH_COINS,
    SET_CURRENT_INNER_COIN, SET_CURRENT_PAGE,
    SET_PAGE_LIMIT, SET_SEARCHING_WORD, SET_SORTING_NAME,
    SET_TABLE_RATE_LIMIT
} from "../utils/reducerConsts";

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
    tableRateLimit: 10,
    sortObj: {
        sort: {
            name: 'new_coin',
            value: 1
        },
        page: 1,
        search: '',
        limit: 10
    }
}

export default function coinReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                sortObj: {
                    ...state.sortObj,
                    page: action.payload
                }
            }
        case SET_SEARCHING_WORD:
            return {
                ...state,
                sortObj: {
                    ...state.sortObj,
                    search: action.payload
                }
            }
        case SET_SORTING_NAME:
            return {
                ...state,
                sortObj: {
                    ...state.sortObj,
                    sort: action.payload
                }
            }
        case SET_PAGE_LIMIT:
            return {
                ...state,
                sortObj: {
                    ...state.sortObj,
                    limit: action.payload
                }
            }
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
        default:
            return state
    }
};

export const setCurrentPageAction =  curPage => ({type: SET_CURRENT_PAGE, payload: curPage })
export const setSearchingWordAction = searchWord => ({type: SET_SEARCHING_WORD, payload: searchWord})
export const setSortingNameObjAction = sortNameObj => ({type: SET_SORTING_NAME, payload: sortNameObj})
export const setCoinPageLimitAction = pageLimit => ({type: SET_PAGE_LIMIT, payload: pageLimit})
export const addCoinAction = addCoin => ({type: ADD_COIN, payload: addCoin})
export const fetchCoinAction = coins => ({type: FETCH_COINS, payload: coins})
export const setCurrentInnerCoinAction = coin => ({type: SET_CURRENT_INNER_COIN, payload: coin})
export const setTableRateLimitAction = limit => ({type: SET_TABLE_RATE_LIMIT, payload: limit})
