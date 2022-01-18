import {ADD_COIN, ADD_COIN_NAME} from "../utils/reducerConsts";

const defaultState = {
    addCoin: {
        name: '',
        description: '',
        price: '',
        symbol: '',
        market_cap: '',
        launch_date: '',
        chain: '',
        address: '',
        contractTelegram: '',
        contractTwitter: '',
        contractReddit: '',
        contractWeb: '',
        contractDiscord: '',
        logotype: '',
        contractAdditional: '',
        email: '',
        telegram: ''
    }
}

export default function coinReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COIN:
            return {
                ...state,
                addCoin: action.payload
            }
        default:
            return state
    }
};

export const addCoinAction = addCoin => ({type: ADD_COIN, payload: addCoin})
