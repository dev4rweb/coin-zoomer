import React, {useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/TimeFilter/TimeFilter.module.scss'
import medalImg from '../../../../../assets/img/medal.png'
import {ButtonGroup, ToggleButton} from "react-bootstrap";

const TimeFilter = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: '1w', value: '1', cl: s.radioBtnFirst },
        { name: '24h', value: '2', cl: s.radioBtnSecond },
        { name: '1h', value: '3', cl: s.radioBtnThird },
    ];
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
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
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
