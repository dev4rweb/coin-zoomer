import React, {useEffect, useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/CategoryFilter/CategoryFilter.module.scss'
import {ToggleButton} from "react-bootstrap";
import notificationImg from '../../../../../assets/icons/hot-notification.svg'
import notificationGrayImg from '../../../../../assets/icons/hot-notification-gray.png'
import newImg from '../../../../../assets/icons/new.svg'
import newGrayImg from '../../../../../assets/icons/new-gray.png'
import trophyImg from '../../../../../assets/icons/trophy-gray.svg'
import trophyGrayImg from '../../../../../assets/icons/trophy.svg'
import discountImg from '../../../../../assets/icons/discount.svg'
import discountGrayImg from '../../../../../assets/icons/discount-gray.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery, fetchCoinByQueryObj} from "../../../../asyncAction/coinInner";
import {setIsTimerFilterAction, setSortingNameObjAction} from "../../../../reducers/coinReducer";

const CategoryFilter = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('new_coin');
    const sortObj = useSelector(state => state.coin.sortObj)
    const isTimerFilterActive = useSelector(state => state.coin.isTimerFilter)

    const radios = [
        {id: 10, name: "Today's Hot", value: 'today_hot', img: notificationGrayImg, active: notificationImg, cl: s.hots},
        {id: 11, name: 'New', value: 'new_coin', img: newGrayImg, active: newImg, cl: s.news},
        {id: 12, name: 'All time best', value: 'all_time_best', img: trophyImg, active: trophyGrayImg, cl: s.best},
        {id: 13, name: 'Presale', value: 'is_presale', img: discountGrayImg, active: discountImg, cl: s.presale},
    ];

    useEffect(() => {
        if (isTimerFilterActive) setValue('10')
    }, [isTimerFilterActive]);

    const sortHandler = e => {
        console.log('sortHandler - ', e.currentTarget.value)
        dispatch(setIsTimerFilterAction(false))
        setValue(e.currentTarget.value)
        let sort = null
        switch (e.currentTarget.value) {
            case 'is_presale':
                sort = {name: 'is_presale', value: 1}
                dispatch(setSortingNameObjAction(sort))
                sortObj.sort = sort
                dispatch(fetchCoinByQueryObj(sortObj))
                return
            case 'new_coin':
                sort = {name: 'new_coin', value: 1}
                dispatch(setSortingNameObjAction(sort))
                sortObj.sort = sort
                dispatch(fetchCoinByQueryObj(sortObj))
                return;
            case 'all_time_best':
                sort = {name: 'all_time_best', value: 1}
                dispatch(setSortingNameObjAction(sort))
                sortObj.sort = sort
                dispatch(fetchCoinByQueryObj(sortObj))
                return;
            case 'today_hot':
                sort = {name: 'today_hot', value: 1}
                dispatch(setSortingNameObjAction(sort))
                sortObj.sort = sort
                dispatch(fetchCoinByQueryObj(sortObj))
                return;
        }
    };

    return (
        <div className={s.catFilter}>
            <p className={s.title}>Filter</p>
            <div className={s.btnGroupWrapper}>
                {radios.map((rad, idx) => (
                    <ToggleButton
                        key={rad.id}
                        id={`sort-${rad.id}`}
                        type="checkbox"
                        variant='outline-light'
                        name="radio"
                        className={`${s.toggleBtn} ${rad.cl}`}
                        value={rad.value}
                        checked={value === rad.value}
                        onChange={sortHandler}
                    >
                        {rad.name}
                        {
                            value === rad.value ?
                                <img src={rad.active} alt=""/> :
                                <img src={rad.img} alt=""/>
                        }

                    </ToggleButton>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
