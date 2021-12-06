import React from 'react';
import s from '../../../../sass/components/UI/Popover/PopoverItem.module.scss'

const PopoverItem = ({data}) => {
    return (
        <div className={s.container}>
            <img className={s.icon} src={data.img} alt="icon"/>
            <div className={s.content}>
                <h5 className={s.title}>{data.title}</h5>
                <p className={s.text}>{data.text}</p>
            </div>
        </div>
    );
};

export default PopoverItem;
