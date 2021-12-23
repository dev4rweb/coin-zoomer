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
                                    <TariffCard key={item.id} data={item} />
                                )
                            }
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default AdcPage;
