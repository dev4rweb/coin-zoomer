import React from 'react';
import s from '../../../../sass/components/UI/GraphicIncrease/GraphicIncrease.module.scss'
import upIcon from '../../../../assets/img/icon-up.png'

const GraphicIncrease = () => {
    return (
        <div className={s.graphIncrease}>
            <img src={upIcon} alt="up"/>
            <p className={s.greenText}>12.993%</p>
        </div>
    );
};

export default GraphicIncrease;
