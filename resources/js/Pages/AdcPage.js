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

const AdcPage = ({currentUser, errors}) => {
    const tariffCards = [
        {
            id: 1,
            title: 'Tarif 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            discount: null,
            planList: [
                {id: 1, name: 'Name plan', cost: 12},
                {id: 2, name: 'Name plan', cost: 12},
                {id: 3, name: 'Name plan', cost: 12},
                {id: 4, name: 'Name plan', cost: 12}
            ]
        },
        {
            id: 2,
            title: 'Tarif 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            discount: -55,
            planList: [
                {id: 1, name: 'Name plan', cost: 12},
                {id: 2, name: 'Name plan', cost: 12},
                {id: 3, name: 'Name plan', cost: 12},
                {id: 4, name: 'Name plan', cost: 12},
                {id: 5, name: 'Name plan', cost: 12},
            ]
        },
        {
            id: 3,
            title: 'Tarif 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            discount: null,
            planList: [
                {id: 1, name: 'Name plan', cost: 12},
                {id: 2, name: 'Name plan', cost: 12},
                {id: 3, name: 'Name plan', cost: 12},
                {id: 4, name: 'Name plan', cost: 12},
            ]
        }
    ]
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
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
                            <img className={s.graphic} src={graphicImg} alt="graphic"/>
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
                        <div className={s.discountPart}>
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
                        </div>
                        <div className={s.discountPart}>
                            <Medal>
                                <h3>Need to boost your marketing efforts?</h3>
                            </Medal>
                            <div className={s.discountCard}>
                                <div className={s.point}>
                                    <span className={s.pointNum}>1</span>
                                    <div className={s.pointBLock}>
                                        <h4 className={s.pointTitle}>Put a backlink to CoinMooner on your project
                                            website and
                                            receive a 10% discount for any ad package!</h4>
                                        <p className={s.pointContent}>Pay 40% of total price in BNB, and 35% in $MOONER equivalent, and get 25% discount.</p>
                                    </div>
                                </div>
                                <div className={s.btnWrapper}>
                                    <OutlineBtn maxWith={'225px'}>FeedBack</OutlineBtn>
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
