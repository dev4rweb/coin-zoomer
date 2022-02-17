import {ADD_CURRENT_VOTE, CREATE_VOTE, FETCH_CURRENT_VOTES, FETCH_VOTES} from "../utils/reducerConsts";

const defaultState = {
    votes: [],
    curVotes: [],
}

export default function voteReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_VOTES:
            return {
                ...state,
                votes: action.payload
            }
        case CREATE_VOTE:
            return {
                ...state,
                votes: [...state.votes, action.payload]
            }
        case FETCH_CURRENT_VOTES:
            return {
                ...state,
                curVotes: action.payload
            }
        case ADD_CURRENT_VOTE:
            return {
                ...state,
                curVotes: [...state.curVotes, action.payload]
            }
        default:
            return state
    }
};

export const fetchVotesAction = votes => ({type: FETCH_VOTES, payload: votes})
export const createVoteAction = vote => ({type: CREATE_VOTE, payload: vote})
export const fetchCurrentVotesAction = votes => ({type: FETCH_CURRENT_VOTES, payload: votes})
export const createCurrentVoteAction = vote => ({type: ADD_CURRENT_VOTE, payload: vote})
