import React, {useEffect} from 'react';
import s from '../../sass/pages/VerifiedPage/VerifiedPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Container} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import kycImg from '../../assets/img/kyc-tap.png'
import Medal from "../components/Medal/Medal";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";

const VerifiedPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.verifiedPage}>
                <Container style={{marginTop: '30px'}}>
                    <CustomAlert/>
                    <BannerBlock/>

                    <section className={s.kycSection}>
                        <img className={s.tabletImg} src={kycImg} alt="tablet"/>
                        <div className={s.contentBlock}>
                            <div className={s.medalWrapper}>
                                <Medal>
                                    <p>About us and contacts</p>
                                </Medal>
                            </div>
                            <p>
                                Doxxing - Get your team verified to show your community your transparency
                            </p>
                            <p>
                                Know Your Customer (KYC) – is the essential method of verification the identity of the
                                project teams. CoinMooner employs this procedure to verify the identity of the project
                                team members. Let's make crypto space safer!
                            </p>
                            <h3 className={s.faqTitle}>FAQ</h3>
                            <CustomAccordion />
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default VerifiedPage;
