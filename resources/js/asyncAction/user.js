import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction, setLoadingAction} from "../reducers/errorsReducer";

export const fillUserVoteLimit = (userId, voteAmount) => {
    return function (dispatch) {
        dispatch(setLoadingAction(true))
        // console.log('fillUserVoteLimit', voteAmount)
        axios.post('/api/fill-vote-limit', {
            user_id: userId,
            voteAmount
        }).then(res => {
            // console.log('fillUserVoteLimit res', res)
            if (res.data.success && res.data.model) {
                dispatch(setCurrentUserAction(res.data.model));
            } else {
                dispatch(setErrorsAction({message: 'User not found'}))
            }
        }).catch(err => {
            // console.log('fillUserVoteLimit err ', err)
            dispatch(setErrorsAction({message: 'Something wrong'}))
        }).finally(() => {
            dispatch(setLoadingAction(false))
        });
    }
};
