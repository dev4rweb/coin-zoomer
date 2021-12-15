import React from 'react';
import s from '../../../../sass/components/UI/Increase/Increase.module.scss'
import upIcon from '../../../../assets/img/icon-up.png'

const Increase = ({text = '12.993%'}) => {
    return (
        <div className={s.increase}>
            <img src={upIcon} alt="up"/>
            <p>{text}</p>
        </div>
    );
};

export default Increase;
