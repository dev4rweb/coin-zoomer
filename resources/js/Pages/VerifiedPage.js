import React, {useEffect} from 'react';
import s from '../../sass/pages/VerifiedPage/VerifiedPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import kycImg from '../../assets/img/kyc-tap.png'
import Medal from "../components/Medal/Medal";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";
import CustomForm from "../components/CustomForm/CustomForm";
import InputTwoImageGroup from "../components/UI/InputTwoImageGroup/InputTwoImageGroup";
import telegram from "../../assets/img/ic-telegram.png";
import mail from "../../assets/img/ic_email.png";
import DropdownItem from "react-bootstrap/DropdownItem";
import Form from "react-bootstrap/Form";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";

const VerifiedPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();
    const accordionData = [
        {
            id: 1,
            title: 'Price',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            title: 'How is verification processed?',
            content: 'You are required to join a video call which will be recorded, and in case of rug/honeypot schemes the recording would be uploaded to your social groups for the victims of scam. We will mark your project as verified by CoinMooner team, which will improve your trustworthiness for investors and entire crypto community.'
        },
    ]

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
                            <CustomAccordion data={accordionData}/>
                        </div>
                    </section>

                    <section className={s.formWrapper}>
                        <SectionSeparator sectionName={`How to apply:`}/>
                        <CustomForm title={
                            <p>
                                The field marked with <span style={{color: '#f14b4e'}}>*</span> must be filled in!
                            </p>
                        }>
                            <div className={s.contactForm}>
                                <div className={s.leftSide}>
                                    <p>
                                        Send us direct message on Telegram:
                                    </p>
                                    <InputTwoImageGroup imgLink={telegram} content={'@TelegramSupportKYC'}/>
                                    <p style={{marginTop: '40px'}}>Or e-mail us at:</p>
                                    <InputTwoImageGroup imgLink={mail} content={'support@sitename.com'}/>
                                </div>
                                <div className={s.rightSide}>
                                    <p>Feedback from the site</p>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your email"
                                            className="input-text"
                                            type="email"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your name"
                                            className="input-text"
                                            type="text"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your telegram / email"
                                            className="input-text"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FloatingLabel label="Message">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Message"
                                                style={{height: '150px', resize: 'none'}}
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                    <div className={s.btnWrapper}>
                                        <button
                                            className="simple-btn-outline"
                                            style={{marginRight: '20px'}}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="simple-btn-filled"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CustomForm>
                    </section>
                </Container>
                <LeadersSubscribeBlock/>
            </div>
        </Layout>
    );
};

export default VerifiedPage;
