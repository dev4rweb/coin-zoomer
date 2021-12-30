import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/TokenPage/TokenPage.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import Layout from "../components/Layout";
import {Card, Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import freeImage from '../../assets/img/free-token.png'
import copyIcon from '../../assets/img/ic-copy.png'
import trophy from '../../assets/img/trophy.png'
import bigBall from '../../assets/img/big-ball.png'
import smallBall from '../../assets/img/small-ball.png'
import youtube from '../../assets/img/social/youtube-blue.png'
import tokenGraphic from '../../assets/img/token-graphic.jpg'
import Medal from "../components/Medal/Medal";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import CustomAccordion from "../components/CustomAccordion/CustomAccordion";
import CustomForm from "../components/CustomForm/CustomForm";
import DropdownItem from "react-bootstrap/DropdownItem";

const TokenPage = ({currentUser, errors,}) => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('17TiF7KBBFahSgdW6gW9AEMY2hFCuDk6nj')
    const cards = [
        {id: 1, back:'purple-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 2, back:'orange-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 3, back:'green-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 4, back:'blue-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 5, back:'green-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 6, back:'blue-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 7, back:'orange-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
        {id: 8, back:'purple-card', title: 'Title Features', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem illum nam officia provident tempore!'},
    ]
    const accordionData = [
        {
            id: 1,
            title: '1-204424 eayr',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            title: '1-1241515 eayr',
            content: 'You are required to join a video call which will be recorded, and in case of rug/honeypot schemes the recording would be uploaded to your social groups for the victims of scam. We will mark your project as verified by CoinMooner team, which will improve your trustworthiness for investors and entire crypto community.'
        },
        {
            id: 3,
            title: '1-204425 eayr',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 4,
            title: '1-1241516 eayr',
            content: 'You are required to join a video call which will be recorded, and in case of rug/honeypot schemes the recording would be uploaded to your social groups for the victims of scam. We will mark your project as verified by CoinMooner team, which will improve your trustworthiness for investors and entire crypto community.'
        },
    ]

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.tokenPage}>
                <Container className={s.wrapper}>
                    <CustomAlert/>
                    <BannerBlock/>
                    <section className={s.aboutSection}>
                        <img className={s.freeToken} src={freeImage} alt="reward"/>
                        <div className={s.contentBlock}>
                            <div className={s.medalWrapper}>
                                <Medal>
                                    <p>About token</p>
                                </Medal>
                            </div>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.

                            </p>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.You are in the right place
                                and your ad will be shown to the right people. Driving traffic is our bread and butter
                                and we are constantly growing.
                            </p>
                            <p>
                                You are in the right place and your ad will be shown to the right people. Driving
                                traffic is our bread and butter and we are constantly growing.You are in the right place
                                and your ad will be shown to the right people. Driving traffic is our bread and butter
                                and we are constantly growing
                            </p>
                        </div>
                    </section>
                    <section className={s.infoSection}>
                        <SectionSeparator sectionName={`Token information`} />
                        <div className={s.formWrapper}>
                            <CustomForm title={
                                <div className={`d-flex justify-content-between align-items-center ${s.formHeader}`}>
                                    <p className='text-white m-1'>Address: </p>
                                    <InputGroup className="m-1">
                                        <FormControl
                                            placeholder="Address"
                                            className="input-text"
                                            type="text"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </InputGroup>
                                    <button
                                        className="simple-btn-filled m-1"
                                    >
                                        <img src={copyIcon} alt="copy"/>
                                        Copy
                                    </button>
                                    <InputGroup className="m-1">
                                        <DropdownButton
                                            id="dropdown-custom"
                                            className='dropdown-custom'
                                            title="Send">
                                            <DropdownItem as="button">One Send</DropdownItem>
                                            <DropdownItem as="button">Two Send</DropdownItem>
                                            <DropdownItem as="button">Three Send</DropdownItem>
                                        </DropdownButton>
                                    </InputGroup>
                                </div>
                            }>
                                <div className={s.formBody}>
                                    <p className="like-input m-3">Decimals: <span className="text-white">18</span></p>
                                    <p className="like-input m-3">Slippage: <span className="text-white"> 14-17% </span></p>
                                    <p className="like-input m-3">Binance Smart Chain: <span className="text-white"> (BSC) </span></p>
                                </div>
                            </CustomForm>

                        </div>
                    </section>
                    <section className={s.featuresSection}>
                        <SectionSeparator sectionName={`CoinZoomer Features`} />
                        <div className={s.cardsWrapper}>
                            {
                                cards.map(card =>
                                    <Card key={card.id} className={`feature-card ${card.back}`}>
                                        <h1>{card.id}</h1>
                                        <h4>{card.title}</h4>
                                        <p>{card.content}</p>
                                    </Card>
                                )
                            }

                        </div>
                    </section>
                    <section className={s.historySection}>
                        <SectionSeparator sectionName={`CoinZoomer History`} />
                        <CustomAccordion data={accordionData} />
                        <div className={s.formWinner}>
                            <img className={s.trophy} src={trophy} alt="trophy"/>
                            <img className={s.bigBall} src={bigBall} alt="ball"/>
                            <img className={s.oneBall} src={smallBall} alt="ball"/>
                            <img className={s.twoBall} src={smallBall} alt="ball"/>
                            <img className={s.threeBall} src={smallBall} alt="ball"/>
                            <img className={s.fourBall} src={smallBall} alt="ball"/>
                            <img className={s.fiveBall} src={smallBall} alt="ball"/>
                            <div className={s.winnerBody}>
                                <ul className={s.contentList}>
                                    <li>
                                        <div className={s.contentItem}>
                                            <div className={s.numberWrapper}>
                                                <h1>48</h1>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={s.contentItem}>
                                            <div className={s.numberWrapper}>
                                                <h1>78</h1>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={s.contentItem}>
                                            <div className={s.numberWrapper}>
                                                <h1>+7</h1>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero!</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className={s.youtubeWrapper}>
                                    <a href="/"><img className={s.youtube} src={youtube} alt="youtube"/></a>
                                    <p className={s.youtubeText}>Play video about coinzoomer</p>
                                </div>
                                <img className={s.tokenGraphic} src={tokenGraphic} alt="graphic"/>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default TokenPage;
