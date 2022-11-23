import React, {useEffect, useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/TimeFilter/TimeFilter.module.scss'
import medalImg from '../../../../../assets/img/medal.png'
import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setIsTimerFilterAction, setSortingNameObjAction} from "../../../../reducers/coinReducer";
import {fetchCoinByQueryObj} from "../../../../asyncAction/coinInner";
import {getCoinsByQueryObj} from "../../../../utils/navigate";

const TimeFilter = ({isMod = false}) => {
    const dispatch = useDispatch();
    const sortObj = useSelector(state => state.coin.sortObj)
    const isTimerFilterActive = useSelector(state => state.coin.isTimerFilter)
    const [radioValue, setRadioValue] = useState('0');
    const radios = [
        {name: '1w', sort: 'week_hot', value: '1', cl: s.radioBtnFirst},
        {name: '24h', sort: 'today_hot', value: '2', cl: s.radioBtnSecond},
        {name: '1h', sort: 'hour_hot', value: '3', cl: s.radioBtnThird},
    ];

    useEffect(() => {
        if (isMod) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            radios.forEach(i => {
                let val = urlParams.get(i.sort)
                if (val) setRadioValue(i.value)
                // console.log(val)
            });
        }
    }, []);

    useEffect(() => {
        if (!isTimerFilterActive) setRadioValue('0')
    }, [isTimerFilterActive]);

    const changeHandler = (e, radio) => {
        console.log('changeHandler', radio)
        dispatch(setIsTimerFilterAction(true))
        setRadioValue(e.currentTarget.value)
        const sortNameObj = {
            name: radio.sort,
            value: 1
        }
        dispatch(setSortingNameObjAction(sortNameObj))
        sortObj.sort = sortNameObj
        if (isMod) getCoinsByQueryObj(sortObj)
        else dispatch(fetchCoinByQueryObj(sortObj))
    };

    return (
        <div className={s.timeFilter}>
            <img className={s.medal} src={medalImg} alt="medal"/>
            <div className={s.content}>
                <p className={s.title}>Coins can be upvoted every
                    <span className={s.blue}> 24h</span>
                </p>
                <div>
                    <ButtonGroup className={s.radioBtnGroup}>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant='outline-secondary'
                                name="radio"
                                className={`${s.radioBtn} ${radio.cl}`}
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={e => changeHandler(e, radio)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default TimeFilter;
