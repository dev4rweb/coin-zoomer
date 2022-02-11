import axios from "axios";
import {addVoteAction} from "../reducers/coinReducer";
import {setErrorsAction} from "../reducers/errorsReducer";

export const addVote = vote => {
    return function (dispatch) {
        axios.post(`api/votes`, vote)
            .then(res => {
                console.log('addVote', res)
                if (res.data.success) {
                    dispatch(addVoteAction(res.data.model));
                    window.location.reload()
                } else {
                    dispatch(setErrorsAction({message: 'something wrong'}))
                }
            })
            .catch(err => {
                console.log('addVote err', err)
                dispatch(setErrorsAction(err.response.message))
            });
    };
};
