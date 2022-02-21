import axios from "axios";
import {fetchCoinAction} from "../reducers/coinReducer";

export const fetchCoinByQuery = (sort = null, page = 1, search = '', limit = 10) => {
    return function (dispatch) {
        if (sort) {
            axios.get(`api/coins?${sort.name}=${sort.value}&page=${page}&search_name=${search}&limit=${limit}`)
                .then(res => {
                    console.log('fetchCoinByQuery', res)
                    if (res.data.success) {
                        dispatch(fetchCoinAction(res.data.models))
                    }
                })
                .catch(err => {
                    console.log('fetchCoinByQuery err', err.response.message)
                });
        } else {
            axios.get(`api/coins?search_name=${search}&page=${page}&limit=${limit}`)
                .then(res => {
                    console.log('fetchCoinByQuery', res)
                    if (res.data.success) {
                        dispatch(fetchCoinAction(res.data.models))
                    }
                })
                .catch(err => {
                    console.log('fetchCoinByQuery err', err.response.message)
                });
        }
    };
};
