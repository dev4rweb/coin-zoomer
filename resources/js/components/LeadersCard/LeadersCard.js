import React from 'react';
import s from '../../../sass/components/LeadersCard/LeadersCard.module.scss'
import TopCoinsItem from "../TopCoins/TopCoinsItem";

const LeadersCard = ({title, data}) => {
    return (
        <div className={s.leadersCard}>
            <div className={s.wrapper}>
                <div className={s.header}>{title}</div>
                <ul className={s.listContent}>
                    {
                        data && data.map((i, index) => {
                            /*const isStriped = (index + 1) % 2 === 0
                            const striped = isStriped ? s.striped : ''
                            console.log('isStriped ', isStriped)*/
                            return (
                                <TopCoinsItem key={index} data={i} index={index}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeadersCard;
