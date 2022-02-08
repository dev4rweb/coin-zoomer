import axios from "axios";
import {fetchCoinAction} from "../reducers/coinReducer";

export const fetchCoinByQuery = (sort = null, search = '') => {
    return function (dispatch) {
        axios.get(`api/coins?${sort.name}=${sort.value}&search_name=${search}`)
            .then(res => {
                console.log('fetchCoinByQuery', res)
                if (res.data.success) {
                    dispatch(fetchCoinAction(res.data.models))
                }
            })
            .catch(err => {
                console.log('fetchCoinByQuery err', err.response.message)
            });
    };
};
