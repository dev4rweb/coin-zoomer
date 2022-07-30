import {FETCH_REFERRAL_LINKS} from "../utils/reducerConsts";

const defaultState = {
    referral_links: []
}

export default function referralLinksReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_REFERRAL_LINKS:
            return {
                ...state,
                referral_links: action.payload
            }
        default:
            return state
    }
};

export const fetchReferralLinksAction = links => ({type: FETCH_REFERRAL_LINKS, payload: links})
