import {ADD_CHAINS, ADD_NEW_CHAIN, REMOVE_CHAIN} from "../utils/reducerConsts";

const defaultState = {
    chains: []
}

export default function chainReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CHAINS:
            return {
                ...state,
                chains: action.payload
            }
        case REMOVE_CHAIN:
            return {
                ...state,
                chains: state.chains.filter(i => i.id !== action.payload)
            }
        case ADD_NEW_CHAIN:
            return {
                ...state,
                chains: [...state.chains, action.payload]
            }
        default:
            return state
    }
};

export const addChainsAction = chains => ({type: ADD_CHAINS, payload: chains})
export const removeChainAction = chainId => ({type: REMOVE_CHAIN, payload: chainId})
export const addNewChainAction = chain => ({type: ADD_NEW_CHAIN, payload: chain})
