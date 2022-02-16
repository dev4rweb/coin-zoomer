import axios from "axios";
import {addVoteAction} from "../reducers/coinReducer";
import {setErrorsAction, setLoadingAction} from "../reducers/errorsReducer";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {createVoteAction} from "../reducers/voteReducer";

export const addVote = vote => {
    return function (dispatch) {
        dispatch(setLoadingAction(true))
        axios.post(`/api/votes`, vote)
            .then(res => {
                console.log('addVote', res)
                if (res.data.success) {
                    dispatch(addVoteAction(res.data.model));
                    dispatch(createVoteAction(res.data.model))
                    dispatch(setCurrentUserAction(res.data.user))
                    // window.location.reload()
                } else {
                    dispatch(setErrorsAction({message: 'something wrong'}))
                }
            })
            .catch(err => {
                console.log('addVote err', err)
                // dispatch(setErrorsAction(err.response))
            })
            .finally(() => {
                dispatch(setLoadingAction(false))
            });
    };
};
