import axios from "axios";
import {fetchCoinAction} from "../reducers/coinReducer";
import {setTopCoinsByDayAction, setTopCoinsByHourAction, setTopCoinsByWeekAction} from "../reducers/topCoinsReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADMIN_COINS_PAGE} from "../utils/routesPath";
import {
    setLeadersCoinsByDayAction,
    setLeadersCoinsByMarketCapAction,
    setLeadersCoinsByWeekAction, setTheBestLeaderAction
} from "../reducers/leadersCoinsReducer";

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

export const fetchCoinByQueryObj = (sortObj) => {
    return function (dispatch) {
        axios.get(`api/coins?${sortObj.sort.name}=${sortObj.sort.value}&page=${sortObj.page}&search_name=${sortObj.search}&limit=${sortObj.limit}`)
            .then(res => {
                console.log('fetchCoinByQueryObj', res)
                if (res.data.success) {
                    dispatch(fetchCoinAction(res.data.models))
                }
            })
            .catch(err => {
                console.log('fetchCoinByQueryObj err', err.response.message)
            });
    };
};

export const fetchTopCoins = byWhat => {
    const sortObj = {
        sortName: 'week_hot',
        sortValue: 1,
        limit: 5
    }
    switch (byWhat) {
        case 'hour':
            sortObj.sortName = 'hour_hot'
            break
        case 'day':
            sortObj.sortName = 'today_hot'
            break
        case 'week':
            sortObj.sortName = 'week_hot'
            break
        case 'leader_day':
            sortObj.sortName = 'today_hot'
            sortObj.limit = 2
            break
        case 'leader_week':
            sortObj.sortName = 'week_hot'
            sortObj.limit = 2
            break
        case 'leader_market_cap':
            sortObj.sortName = 'isPromoted'
            sortObj.limit = 5
            break
    }

    return function (dispatch) {
        axios.get(`api/coins?${sortObj.sortName}=${sortObj.sortValue}&limit=${sortObj.limit}`)
            .then(res => {
                // console.log('fetchTopCoinsByHour', res)
                if (res.data.success) {
                    switch (byWhat) {
                        case 'hour':
                            dispatch(setTopCoinsByHourAction(res.data.models))
                            break
                        case 'day':
                            dispatch(setTopCoinsByDayAction(res.data.models))
                            if (res.data.models && res.data.models.data.length)
                                dispatch(setTheBestLeaderAction(res.data.models.data[0]))
                            break
                        case 'week':
                            dispatch(setTopCoinsByWeekAction(res.data.models))
                            break
                        case 'leader_day':
                            dispatch(setLeadersCoinsByDayAction(res.data.models))
                            break
                        case 'leader_week':
                            dispatch(setLeadersCoinsByWeekAction(res.data.models))
                            break
                        case 'leader_market_cap':
                            dispatch(setLeadersCoinsByMarketCapAction(res.data.models))
                            break
                    }
                }
            })
            .catch(err => {
                // console.log('fetchTopCoinsByHour err', err.response.message)
            });
    };
};

export const removeCoin = id => {
    return function (dispatch) {
        axios.post(`api/coins/${id}`, {
            _method: 'DELETE'
        }).then(res => {
            console.log('removeCoin', res)
            if (res.data.success) {
                Inertia.visit(PATH_ADMIN_COINS_PAGE)
            }
            dispatch(setErrorsAction({message: res.data.message}))
        }).catch(err => {
            console.log('removeCoin err', err)
            dispatch(setErrorsAction({message: 'Something wrong!'}))
        });
    }
};
