import React, {useEffect} from 'react';
import s from '../../sass/pages/ContactsPage/ContactsPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Container} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import girl from '../../assets/img/contact-girl.png'
import Medal from "../components/Medal/Medal";
import BlueSocialBlock from "../components/BlueSocialBlock/BlueSocialBlock";
import CustomForm from "../components/CustomForm/CustomForm";

const ContactsPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.contactsPage}>
                <Container style={{marginTop: '30px'}}>
                    <CustomAlert/>
                    <BannerBlock/>
                    <section className={s.aboutUs}>
                        <img className={s.girl} src={girl} alt="contact"/>
                        <div className={s.contentBlock}>
                            <div className={s.medalWrapper}>
                                <Medal>
                                    <p>About us and contacts</p>
                                </Medal>
                            </div>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.
                            </p>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.You are in the right
                                place and your ad will be shown to the right people. Driving traffic is our bread
                                and butter and we are constantly growing.
                            </p>
                            <h3 className={s.socialTitle}>Social networks </h3>
                            <div className={s.socialWrapper}>
                                <BlueSocialBlock />
                            </div>
                        </div>
                    </section>
                    <section className={s.formWrapper}>
                        <CustomForm title={<p>Title</p>}>
                            <h1>Custom Form</h1>
                        </CustomForm>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default ContactsPage;
