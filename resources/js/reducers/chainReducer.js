import {ADD_CHAINS} from "../utils/reducerConsts";

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
        default:
            return state
    }
};

export const addChainsAction = chains => ({type: ADD_CHAINS, payload: chains})
