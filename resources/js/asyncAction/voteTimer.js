import {setErrorsAction} from "../reducers/errorsReducer";

export const waitTime = votes => {
    return function (dispatch) {
        if (votes) {
            const now = Date.now();
            const lastVote = votes[votes.length - 1];
            const vote = new Date(lastVote.created_at).getTime();
            const startDay = new Date().setHours(0, 0, 0, 0);
            const dif = (now - vote) / 1000 / 60;
            const currentHours = (now - startDay) / 1000 / 60 / 60
            console.log('getTodayVotes', getTodayVotes(votes))
            dispatch(setErrorsAction({message: `dif - ${dif.toFixed(0)}, startDay ${currentHours.toFixed(0)}`}));
        } else {
            dispatch(setErrorsAction({message: 'Something wrong'}))
        }
    };
};

export const getTodayVotes = votes => {
    if (votes && votes.length) {
        const startDay = new Date().setHours(0, 0, 0, 0);
        return votes.filter(i => new Date(i.created_at).getTime() > startDay)
    } else return []
}
