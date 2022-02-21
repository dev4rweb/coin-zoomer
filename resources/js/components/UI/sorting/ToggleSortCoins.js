import React, {useState} from 'react';
import s from '../../../../sass/components/UI/ToggleSort/ToggleSort.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery} from "../../../asyncAction/coinInner";

const ToggleSortCoins = ({sortBy}) => {
    const [sort, setSort] = useState(0)
    const limit = useSelector(state => state.coin.tableRateLimit)
    const dispatch = useDispatch()

    const handleClick = (e, index) => {
        setSort(index)
        const sort = {name: sortBy, value: index}
        dispatch(fetchCoinByQuery(sort, 1,'', limit))
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
