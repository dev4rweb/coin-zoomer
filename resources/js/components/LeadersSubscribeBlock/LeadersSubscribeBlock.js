import React from 'react';
import s from '../../../sass/components/LeadersSubscribeBlock/LeadersSubscribeBlock.module.scss'
import {Container} from "react-bootstrap";
import LeadersCard from "../LeadersCard/LeadersCard";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";
import oneImg from "../../../assets/img/top_coins/one.png";
import twoImg from "../../../assets/img/top_coins/two.png";

const LeadersSubscribeBlock = () => {
    const leadersData =[
        {id: 1, logo: oneImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 2, logo: twoImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
    ]

    return (
        <section className={s.cardsSection}>
            <Container className={s.wrapper}>
                <LeadersCard
                    title={`Leaders of 24 hours`}
                    data={leadersData}
                />
                <LeadersCard
                    title={`Leaders of 124 hours`}
                    data={leadersData}
                />
                <SubscribeBlock />
            </Container>
        </section>
    );
};

export default LeadersSubscribeBlock;
