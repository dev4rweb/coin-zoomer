import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/AirDropOpenPage/AirDropOpenPage.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import Layout from "../components/Layout";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import logo from "../../assets/img/token-logo-coin.png";
import {Head} from '@inertiajs/inertia-react'
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";

const AirDropOpenPage = ({currentUser, errors, pageId}) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('Status')
    const [date, setDate] = useState('2022-02-02')
    const [distributionDate, setSistributionDate] = useState('N/A')
    const [reward, setReward] = useState('1 HMT ($0.92) For All')
    const statistic = [
        {name: 'Votes', val: 87046},
        {name: 'Today', val: 87046},
        {name: '1h', val: 0},
        {name: '24h', val: 87046},
    ]

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        console.log('AirDropOpenPage pageId', pageId)
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <div className={s.airDropOpenPage}>
                <Container className={s.wrapper}>
                    <CustomAlert />
                    <BannerBlock />
                    <section className={s.tokenSection}>
                        <div className={s.tokenHeader}>
                            <div className={s.name}>
                                <h1>Name Airdrop</h1>
                                <h3>Name token</h3>
                            </div>
                            <InputGroup className={s.tokenInput}>
                                <FormControl
                                    placeholder="Status"
                                    className="input-text"
                                    type="text"
                                    onChange={e => setStatus(e.target.value)}
                                    value={status}
                                />
                            </InputGroup>
                        </div>
                        <div className={s.tokenBody}>
                            <img src={logo} className={s.logo} alt="logo"/>
                            <div className={s.tokenForm}>
                                <div className={s.leftSide}>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            End date
                                            <FormControl
                                                placeholder="End date"
                                                className="input-text"
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                                type="text"
                                            />
                                        </label>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Distribution date
                                            <FormControl
                                                placeholder="Distribution date"
                                                className="input-text"
                                                value={distributionDate}
                                                onChange={e => setSistributionDate(e.target.value)}
                                                type="text"
                                            />
                                        </label>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Reward
                                            <FormControl
                                                placeholder="Reward"
                                                className="input-text"
                                                value={reward}
                                                onChange={e => setReward(e.target.value)}
                                                type="text"
                                            />
                                        </label>
                                    </InputGroup>
                                </div>
                                <div className={s.rightSide}>
                                    <div className={s.statisticBlock}>
                                        <Button
                                            variant="info"
                                            className="fill-btn"
                                            style={{maxHeight: '32px', marginRight: '-5px'}}
                                        >
                                            Clain rewards
                                        </Button>
                                    </div>

                                    <div className={s.coinContent}>
                                        <h3>About coin</h3>
                                        <p>
                                            You are in the right place and your ad will be shown to the right people.
                                            Driving traffic is our bread and butter and we are constantly growing.
                                        </p>
                                        <p>
                                            You are in the right place and your ad will be shown to the right people.
                                            Driving traffic is our bread and butter and we are constantly growing.You
                                            are in the right place and your ad will be shown to the right people.
                                            Driving traffic is our bread and butter and we are constantly growing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={s.buttonSection}>
                        <Button
                            variant="primary"
                            size="lg"
                            className={`btn-big btn-violet`}
                        >
                            Name button
                        </Button>
                        <Button
                            variant="danger"
                            size="lg"
                            className={`btn-big btn-orange`}
                        >
                            Name button
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            className={`btn-big btn-violet`}
                        >
                            Name button
                        </Button>
                        <Button
                            variant="danger"
                            size="lg"
                            className={`btn-big btn-orange`}
                        >
                            Name button
                        </Button>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default AirDropOpenPage;
