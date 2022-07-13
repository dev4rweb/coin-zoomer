import React, {useEffect} from 'react';
import s from '../../../sass/components/LeadersSubscribeBlock/LeadersSubscribeBlock.module.scss'
import {Container} from "react-bootstrap";
import LeadersCard from "../LeadersCard/LeadersCard";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";
import oneImg from "../../../assets/img/top_coins/one.png";
import twoImg from "../../../assets/img/top_coins/two.png";
import {useSelector} from "react-redux";
import {setTheBestLeaderAction} from "../../reducers/leadersCoinsReducer";

const LeadersSubscribeBlock = () => {
    const leadersData =[
        {id: 1, logo: oneImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 2, logo: twoImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
    ]
    const leadersDay = useSelector(state => state.leaderCoins.leadersDay)
    const leadersWeek = useSelector(state => state.leaderCoins.leadersWeek)


    // console.log('leadersDay', leadersDay)
    // console.log('leadersWeek', leadersWeek)

    return (
        <section className={s.cardsSection}>
            <Container className={s.wrapper}>
                {
                    leadersDay &&
                    <LeadersCard
                        title={`Leaders of 24 hours`}
                        data={leadersDay.data.sort((a, b) => b.today_votes - a.today_votes).slice(0, 2)}
                    />
                }

                {
                    leadersWeek &&
                    <LeadersCard
                        title={`Leaders of week`}
                        data={leadersWeek.data.sort((a, b) => b.week_votes - a.week_votes).slice(0, 2)}
                    />
                }
                <SubscribeBlock />
            </Container>
        </section>
    );
};

export default LeadersSubscribeBlock;
