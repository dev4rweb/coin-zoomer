import React, {useState} from 'react';
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

const CategoryFilter = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('10');

    const radios = [
        {id: 10, name: "Today's Hot", value: '10', img: notificationGrayImg, active: notificationImg, cl: s.hots},
        {id: 11, name: 'New', value: '11', img: newGrayImg, active: newImg, cl: s.news},
        {id: 12, name: 'All time best', value: '12', img: trophyImg, active: trophyGrayImg, cl: s.best},
        {id: 13, name: 'Presale', value: '13', img: discountGrayImg, active: discountImg, cl: s.presale},
    ];

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
                        onChange={(e) => setValue(e.currentTarget.value)}
                    >
                        {rad.name}
                        {
                            value === rad.value ?
                                <img src={rad.active} alt=""/>:
                                <img src={rad.img} alt=""/>
                        }

                    </ToggleButton>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
