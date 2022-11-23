import React, {useEffect, useState} from 'react';
import s from '../../../../sass/components/UI/ToggleSort/ToggleSort.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery, fetchCoinByQueryObj} from "../../../asyncAction/coinInner";
import {setSortingNameObjAction} from "../../../reducers/coinReducer";
import {getCoinsByQueryObj} from "../../../utils/navigate";

const ToggleSortCoins = ({sortBy, isMod = false}) => {
    const [sort, setSort] = useState(0)
    const limit = useSelector(state => state.coin.tableRateLimit)
    const dispatch = useDispatch()
    const sortObj = useSelector(state => state.coin.sortObj)

    useEffect(() => {
        // console.log('ToggleSortCoins', isMod, sortBy)
        const queryString = window.location.search;
        // console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        let val = urlParams.get(sortBy)
        if (val) setSort(parseInt(val))
    }, []);

    const handleClick = (e, index) => {
        setSort(index)
        const sort = {name: sortBy, value: index}
        dispatch(setSortingNameObjAction(sort))
        sortObj.sort = sort
        if (isMod) getCoinsByQueryObj(sortObj)
        else dispatch(fetchCoinByQueryObj(sortObj))
    };

    if (sort === 1) {
        return (
            <span
                className={s.sort}
                onClick={event => handleClick(event, 2)}
            >
                &darr;
            </span>
        )
    }

    if (sort === 2) {
        return (
            <span
                className={s.sort}
                onClick={event => handleClick(event, 1)}
            >
                &uarr;
            </span>
        )
    }

    return (
        <span
            className={s.sort}
            onClick={event => handleClick(event, 1)}
        >
            &equiv;
        </span>
    );
};

export default ToggleSortCoins;
