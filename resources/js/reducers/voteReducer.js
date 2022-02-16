import { CREATE_VOTE, FETCH_VOTES} from "../utils/reducerConsts";

const defaultState = {
    votes: []
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
        default:
            return state
    }
};

export const fetchVotesAction = votes => ({type: FETCH_VOTES, payload: votes})
export const createVoteAction = vote => ({type: CREATE_VOTE, payload: vote})
