import React, {useEffect} from 'react';
import s from '../../sass/pages/AdcPage/AdcPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import payImg from '../../assets/img/pay-img.png'
import graphicImg from '../../assets/img/graphic-img.png'
import {setErrorsAction} from "../reducers/errorsReducer";
import {Container} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import Medal from "../components/Medal/Medal";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import TariffCard from "../components/TariffCard/TariffCard";
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import {Inertia} from "@inertiajs/inertia";
import ChartBlock from "../components/ChartBlock/ChartBlock";
import {fetchHotNotificationsAction} from "../reducers/hotNotification";
import {Head} from '@inertiajs/inertia-react'

const AdcPage = ({currentUser, errors, hotNotifications}) => {
    const tariffCards = [
        {
            id: 1,
            title: '1. Banners',
            content: 'Thousands of people will discover about your project as a result of the marketing on our website, allowing you to obtain new investors and boost your number of followers. ',
            discount: null,
            planList: [
                {id: 1, name: '1 day promotion', cost: '0.05 BNB'},
                {id: 2, name: '3 days promotion', cost: '0.1 BNB'},
                {id: 3, name: '5 days promotion', cost: '0.15 BNB'},
                {id: 4, name: '1 week promotion', cost: '0.2 BNB'}
            ]
        },
        {
            id: 2,
            title: 'Promoted coins section',
            content: 'The highlighted coins on the main page receive much more votes than the others, which is a tremendous honor for the project and allows you to uncover possible investors and unique entries to share on your social network accounts. ',
            discount: -55,
            planList: [
                {id: 1, name: '1 day promotion', cost: '0.02 BNB'},
                {id: 2, name: '3 days promotion', cost: '0.05 BNB'},
                {id: 3, name: '5 days promotion', cost: '0.07 BNB'},
                {id: 4, name: '1 week promotion', cost: '0.08 BNB'},
            ]
        },
        {
            id: 3,
            title: 'Promoted + Banner',
            content: '',
            discount: null,
            planList: [
                {id: 1, name: '3 days', cost: '0.13 BNB'},
                {id: 2, name: '5 days', cost: '0.2 BNB'},
                {id: 3, name: '7 days', cost: '0.23 BNB'},
            ]
        }
    ]
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchHotNotificationsAction(hotNotifications))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <div className={s.adcPage}>
                <Container style={{marginTop: '30px'}}>
                    <CustomAlert/>
                    <BannerBlock/>
                    <section className={s.needBoostSection}>
                        <div className={s.leftSide}>
                            <img src={payImg} alt="icon-pay"/>
                        </div>
                        <div className={s.rightSide}>
                            <div className={s.medalWrapper}>
                                <Medal>
                                    <h3>Need to boost your marketing efforts?</h3>
                                </Medal>
                            </div>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.
                            </p>
                            {/*<img className={s.graphic} src={graphicImg} alt="graphic"/>*/}
                            <ChartBlock />
                        </div>
                    </section>

                    <section className={s.promoteSection}>
                        <SectionSeparator sectionName={`Promote packages and prices`}/>
                        <div className={s.cardWrapper}>
                            {
                                tariffCards.map(item =>
                                    <TariffCard key={item.id} data={item}/>
                                )
                            }
                        </div>
                    </section>

                    <section className={s.discountSection}>
                        {/*<div className={s.discountPart}>
                            <Medal>
                                <h3>Need to boost your marketing efforts?</h3>
                            </Medal>
                            <div className={s.discountCard}>
                                <div className={s.point}>
                                    <span className={s.pointNum}>1</span>
                                    <div className={s.pointBLock}>
                                        <h4 className={s.pointTitle}>Get 25% off instantly by paying partly in
                                            $MOONER</h4>
                                        <p className={s.pointContent}>Pay 40% of total price in BNB, and 35% in $MOONER
                                            equivalent, and get 25% discount.</p>
                                    </div>
                                </div>
                                <div className={s.point}>
                                    <span className={s.pointNum}>2</span>
                                    <div className={s.pointBLock}>
                                        <h4 className={s.pointTitle}>Holders of 100,000+ $MOONER get 10% discount on all
                                            ads!</h4>
                                        <p className={s.pointContent}>Holding for a week gets you an 5% increase for
                                            discount, up to 60%!</p>
                                        <p className={s.pointContent}>Hold for at least 1 week - get 15% discount! <br/>
                                            Hold for at least 2 weeks - get 20% discount!</p>
                                        <p className={s.pointContent}>Hold for at least 10 weeks - get 60% discount!</p>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        <div className={s.discountPart}>
                            <Medal>
                                <h3>Would you like to receive a big discount on a promotion?</h3>
                            </Medal>
                            <div className={s.discountCard}>
                                <div className={s.point}>
                                    <span className={s.pointNum}>1</span>
                                    <div className={s.pointBLock}>
                                        <h4 className={s.pointTitle}> Place a backlink to CoinZoomer on your project
                                            website and receive a 25% discount on any ad package! </h4>
                                        {/*<p className={s.pointContent}>Pay 40% of total price in BNB, and 35% in $MOONER equivalent, and get 25% discount.</p>*/}
                                    </div>
                                </div>
                                <div className={s.btnWrapper}>
                                    <OutlineBtn
                                        maxWith={'225px'}
                                        clickHandler={e => Inertia.visit('/contacts')}
                                    >
                                        FeedBack
                                    </OutlineBtn>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default AdcPage;
