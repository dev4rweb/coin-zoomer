import React from 'react';
import s from '../../../sass/components/TopCoins/TopCoinsItem/TopCoinsItem.module.scss'
import starImg from '../../../assets/img/top_coins/star.png'
import partStarImg from '../../../assets/img/top_coins/part-star.png'
import Increase from "../UI/Increase/Increase";

const TopCoinsItem = ({data, index}) => {


    return (
        <li className={`${s.coinItem}`}>
            <span className={s.num}>{index + 1}</span>
            <div className={s.content}>
                <img className={s.logo} src={data.logotype} alt="logo"/>
                <div className={s.data}>
                    <p className={s.name}>{data.name}</p>
                    <Increase/>
                </div>
                <p className={s.price}>{data.price}</p>
                {
                    data.is_coin_gecko ?
                    <img src={starImg} alt="star"/> :
                    <img src={partStarImg} alt="star"/>
                }
            </div>
        </li>
    );
};

export default TopCoinsItem;
