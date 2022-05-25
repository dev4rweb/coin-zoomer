import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/ContactsPage/ContactsPage.module.scss'
import telegram from '../../assets/img/ic-telegram.png'
import mail from '../../assets/img/ic_email.png'
import Layout from "../components/Layout";
import Form from 'react-bootstrap/Form'
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import girl from '../../assets/img/contact-girl.png'
import Medal from "../components/Medal/Medal";
import BlueSocialBlock from "../components/BlueSocialBlock/BlueSocialBlock";
import CustomForm from "../components/CustomForm/CustomForm";
import InputTwoImageGroup from "../components/UI/InputTwoImageGroup/InputTwoImageGroup";
import DropdownItem from "react-bootstrap/DropdownItem";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {fetchHotNotificationsAction} from "../reducers/hotNotification";

const ContactsPage = ({currentUser, errors, hotNotifications}) => {
    const dispatch = useDispatch();
    const [mailData, setMailData] = useState({
        email: '',
        userName: '',
        contact: '',
        coinName: '',
        message: '',
    })

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchHotNotificationsAction(hotNotifications))
        // dispatch(setErrorsAction(errors))
    }, []);

    const sendEmail = e => {
        e.preventDefault()
        console.log('sendEmail', mailData)
        axios.post('/api/send-email', mailData)
            .then(res => {
                console.log('sendEmail', res)
                if (res.data.success) {
                    dispatch(setErrorsAction({message: 'Email sent'}))
                    Inertia.visit('/contacts')
                }
            })
            .catch(err => {
                console.log('sendEmail', err)
            });
    };

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
                                <BlueSocialBlock/>
                            </div>
                        </div>
                    </section>
                    <section className={s.formWrapper}>
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
                                    <InputTwoImageGroup imgLink={telegram} content={'@coinzoomer'}/>
                                    <p style={{marginTop: '40px'}}>Or e-mail us at:</p>
                                    <InputTwoImageGroup imgLink={mail} content={'admin@coinzoomer.com'}/>
                                </div>
                                <div className={s.rightSide}>
                                    <p>Feedback from the site</p>
                                    <p className="mb-0">
                                        email <span style={{color: '#f14b4e'}}>*</span>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Your email"
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

                                    {/*<InputGroup className="mb-3">
                                        <DropdownButton
                                            id="dropdown-custom"
                                            className='dropdown-custom'
                                            title="Themes">
                                            <DropdownItem as="button">One</DropdownItem>
                                            <DropdownItem as="button">Two action</DropdownItem>
                                            <DropdownItem as="button">Three else</DropdownItem>
                                        </DropdownButton>
                                    </InputGroup>*/}

                                    <p className="mb-0">
                                        name
                                    </p>
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

                                        />
                                    </InputGroup>

                                    <p className="mb-0">
                                        telegram
                                    </p>
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


                                    <p className="mb-0">
                                        coin name <span style={{color: '#f14b4e'}}>*</span>
                                    </p>
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


                                    <p className="mb-0">
                                        message <span style={{color: '#f14b4e'}}>*</span>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <FloatingLabel label="Message">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Message"
                                                style={{ height: '150px', resize: 'none' }}
                                                value={mailData.message}
                                                onChange={e => setMailData({
                                                    ...mailData,
                                                    ['message']: e.target.value
                                                })}
                                                required
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
            </div>
        </Layout>
    );
};

export default ContactsPage;
