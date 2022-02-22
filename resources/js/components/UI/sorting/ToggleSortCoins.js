import React, {useState} from 'react';
import s from '../../../../sass/components/UI/ToggleSort/ToggleSort.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery, fetchCoinByQueryObj} from "../../../asyncAction/coinInner";
import {setSortingNameObjAction} from "../../../reducers/coinReducer";

const ToggleSortCoins = ({sortBy}) => {
    const [sort, setSort] = useState(0)
    const limit = useSelector(state => state.coin.tableRateLimit)
    const dispatch = useDispatch()
    const sortObj = useSelector(state => state.coin.sortObj)

    const handleClick = (e, index) => {
        setSort(index)
        const sort = {name: sortBy, value: index}
        dispatch(setSortingNameObjAction(sort))
        sortObj.sort = sort
        dispatch(fetchCoinByQueryObj(sortObj))
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
