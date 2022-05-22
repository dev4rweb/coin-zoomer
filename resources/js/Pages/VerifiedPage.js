import React, {useEffect, useState} from 'react';
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
import {Inertia} from "@inertiajs/inertia";

const VerifiedPage = ({currentUser, errors, hotNotifications}) => {
    const dispatch = useDispatch();
    const accordionData = [
        {
            id: 1,
            title: 'Price:',
            content: `<p>Cryptocurrency: 0.25 BNB or 0.0025 BTC <br/> Paypal: 100 USD <br/> BankWire: 150 USD</p>
            <p>The address for payment will be sent to the email or telegram from the official domain.</p>
            <p>If we identify a scam or a fraudulent attempt during the KYC procedure, we may refuse to repay these money following a failed KYC. </p>`
        },
        {
            id: 2,
            title: 'How to apply:',
            content: `<p>you can complete the form below and we will contact you within 24 hours or you can contact us
             directly on telegram: <br/> CoinZoomerPromo or email:  <a href="mailto:admin@coinzoomer.com">admin@coinzoomer.com</a> </p>`
        },
        {
            id: 3,
            title: 'How is verification processed?',
            content: `<p>Following the signing of the GDPR-compliant data processing agreement.</p>
            <p>We will request a photo with a visible face as well as a card with the date, name of the project,
            the person's position in the organization, and your name.</p>
            <p>The images will be reviewed for the use of a fake person, and if necessary, a video call will be set up.</p>
            <p>We may also verify your entire name.</p>
            <p>The photo will be made public on the server.</p>`
        },
        {
            id: 4,
            title: 'How long is KYC valid?',
            content: `<p>As part of security, KYC is valid for one year after the project's expiration is announced publicly.</p>
            <p>A KYC extension costs half the price of your initial payment.</p>`
        },
        {
            id: 5,
            title: 'How to delist project from  KYC?',
            content: `<p>According to the regulation on the protection of personal data, we must give the possibility
             of withdrawing the processed data and the possibility of removing KYC from a given coin. At the
             request of the person who performed the KYC, we can delete all data related to it. But as a safety
              measure, we will publicly announce that the KYC will be lifted on a given project within 24 hours.
              After such information, users have time to rethink their investment.</p>`
        },
    ]
    const [mailData, setMailData] = useState({
        email: '',
        userName: '',
        contact: '',
        coinName: '',
        message: '',
    })

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))

        dispatch(fetchHotNotificationsAction(hotNotifications))
    }, []);

    const sendEmail = e => {
        e.preventDefault()
        console.log('sendEmail', mailData)
        axios.post('/api/send-email', mailData)
            .then(res => {
                console.log('sendEmail', res)
                if (res.data.success) {
                    dispatch(setErrorsAction({message: 'Email sent'}))
                    Inertia.visit('/verified')
                }
            })
            .catch(err => {
                console.log('sendEmail', err)
            });
    };

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
                                    <p>About us and contacts </p>
                                </Medal>
                            </div>
                            {/*<p>
                                Doxxing - Get your team verified to show your community your transparency
                            </p>
                            <p>
                                Know Your Customer (KYC) – is the essential method of verification the identity of the
                                project teams. CoinMooner employs this procedure to verify the identity of the project
                                team members. Let's make crypto space safer!
                            </p>*/}
                            <p>
                                KYC - Get your team verified to show that your project is transparent and reliable for
                                your community!
                            </p>
                            <p>
                                Know Your Customer (KYC) – is a critical method for verifying the authenticity of
                                project teams. <br/>
                                This technique is used by CoinZommer to authenticate the identities of project team
                                members. <br/>
                                Let's make the crypto space more secure!
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
                            <form
                                onSubmit={sendEmail}
                                className={s.contactForm}
                            >
                                <div className={s.leftSide}>
                                    <p>
                                        Send us direct message on Telegram:
                                    </p>
                                    <InputTwoImageGroup imgLink={telegram} content={'@CoinZoomer'}/>
                                    <p style={{marginTop: '40px'}}>Or e-mail us at:</p>
                                    <InputTwoImageGroup imgLink={mail} content={'admin@coinzoomer.com'}/>
                                </div>
                                <div className={s.rightSide}>
                                    <p>Feedback from the site</p>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your email: is necessary"
                                            className="input-text"
                                            type="email"
                                            value={mailData.email}
                                            onChange={e => setMailData({
                                                ...mailData,
                                                ['email']: e.target.value
                                            })}
                                            required
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your name:"
                                            className="input-text"
                                            type="text"
                                            value={mailData.userName}
                                            onChange={e => setMailData({
                                                ...mailData,
                                                ['userName']: e.target.value
                                            })}
                                            required
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your Telegram:"
                                            className="input-text"
                                            value={mailData.contact}
                                            onChange={e => setMailData({
                                                ...mailData,
                                                ['contact']: e.target.value
                                            })}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="text"
                                            placeholder="Coin name: is necessary"
                                            className="input-text"
                                            value={mailData.coinName}
                                            onChange={e => setMailData({
                                                ...mailData,
                                                ['coinName']: e.target.value
                                            })}
                                            required
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FloatingLabel label="Message">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Any questions: (like message this same input)"
                                                style={{height: '150px', resize: 'none'}}
                                                value={mailData.message}
                                                onChange={e => setMailData({
                                                    ...mailData,
                                                    ['message']: e.target.value
                                                })}
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
                                            type={"submit"}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </CustomForm>
                    </section>
                </Container>
                <LeadersSubscribeBlock/>
            </div>
        </Layout>
    );
};

export default VerifiedPage;
