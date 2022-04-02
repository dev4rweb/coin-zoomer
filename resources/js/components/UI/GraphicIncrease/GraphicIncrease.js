import React from 'react';
import s from '../../../../sass/components/UI/GraphicIncrease/GraphicIncrease.module.scss'
import upIcon from '../../../../assets/img/icon-up.png'

const GraphicIncrease = ({text = 12.99}) => {

    return (
        <div className={s.graphIncrease}>
            {/*<img src={upIcon} alt="up"/>*/}
            {
                text > 0 ?
                    <p className={s.greenText}>&uarr; {text} %</p>
                    :
                    <p className={s.redText}>&darr; {text} %</p>
            }

        </div>
    );
};

export default GraphicIncrease;
