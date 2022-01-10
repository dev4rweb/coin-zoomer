import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/CoinOpenPage/CoinOpenPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import Layout from "../components/Layout";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import CoinsRateTable from "../components/UI/Tables/CoinsRateTable/CoinsRateTable";
import logo from '../../assets/img/token-logo-coin.png'
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import {geckoGetCurrentCoin} from "../asyncAction/coinGecko";

const CoinOpenPage = ({currentUser, errors, pageId}) => {
    const dispatch = useDispatch();
    const currentCoin = useSelector(state => state.coinGecko.currentCoin)
    const [token, setToken] = useState('17TiF7KBBFahSgdW6gW9AEMY2hFCuDk6nj')
    const [marketCup, setMarketCup] = useState('$789.466')
    const [price, setPrice] = useState('$0.00000000324476')
    const [launch, setLaunch] = useState('22.12.2012  10:55:40')
    const statistic = [
        {name: 'Votes', val: 87046},
        {name: 'Today', val: 87046},
        {name: '1h', val: 0},
        {name: '24h', val: 87046},
    ]

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        console.log('CoinOpenPage pageId', pageId)
        // dispatch(setErrorsAction(errors))
        dispatch(geckoGetCurrentCoin(pageId))
    }, []);

    return (
        <Layout>
            <div className={s.coinOpenPage}>
                <Container className={s.wrapper}>
                    <CustomAlert/>
                    <BannerBlock/>
                    {
                        currentCoin ?
                            <section className={s.tokenSection}>
                                <div className={s.tokenHeader}>
                                    <div className={s.name}>
                                        <h1>{currentCoin.name}</h1>
                                        <h3>Name token</h3>
                                    </div>
                                    <InputGroup className={s.tokenInput}>
                                        <FormControl
                                            placeholder="Your token"
                                            className="input-text"
                                            type="text"
                                            onChange={e => setToken(e.target.value)}
                                            value={token}
                                        />
                                    </InputGroup>
                                </div>
                                <div className={s.tokenBody}>
                                    <img src={currentCoin.image.large} className={s.logo} alt="logo"/>
                                    <div className={s.tokenForm}>
                                        <div className={s.leftSide}>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Market cap
                                                    {
                                                        currentCoin.market_data.market_cap.usd ?
                                                            <FormControl
                                                                placeholder="Market cap"
                                                                className="input-text"
                                                                value={currentCoin.market_data.market_cap.usd}
                                                                type="text"
                                                                disabled
                                                            />
                                                            :
                                                            <FormControl
                                                                placeholder="Market cap"
                                                                className="input-text"
                                                                value={'unknown'}
                                                                type="text"
                                                                disabled
                                                            />
                                                    }
                                                </label>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Price
                                                    {
                                                        currentCoin.market_data.current_price.usd ?
                                                            <FormControl
                                                                placeholder="Price"
                                                                className="input-text"
                                                                value={currentCoin.market_data.current_price.usd}
                                                                type="text"
                                                                disabled
                                                            />
                                                            :
                                                            <FormControl
                                                                placeholder="Price"
                                                                className="input-text"
                                                                value={`unknown`}
                                                                type="text"
                                                                disabled
                                                            />
                                                    }

                                                </label>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Launch
                                                    {
                                                        currentCoin.genesis_date ?
                                                        <FormControl
                                                            placeholder="Price"
                                                            className="input-text"
                                                            value={currentCoin.genesis_date}
                                                            type="text"
                                                            disabled
                                                        />
                                                            :
                                                            <FormControl
                                                                placeholder="Price"
                                                                className="input-text"
                                                                value={`unknown`}
                                                                type="text"
                                                                disabled
                                                            />
                                                    }

                                                </label>
                                            </InputGroup>
                                        </div>
                                        <div className={s.rightSide}>
                                            <div className={s.statisticBlock}>
                                                {
                                                    statistic.map((item, index) => {
                                                        return (
                                                            <div key={index} className={s.btnWrapper}>
                                                                <Button
                                                                    variant="info"
                                                                    className="fill-btn"
                                                                    style={{maxHeight: '32px', marginRight: '-5px'}}
                                                                >
                                                                    {item.name}
                                                                </Button>
                                                                <OutlineBtn>
                                                                    <span>{item.val}</span>
                                                                </OutlineBtn>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className={s.coinContent}>
                                                <h3>About coin</h3>
                                                <p dangerouslySetInnerHTML={{__html: currentCoin.description.en}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            :
                            <section className={s.tokenSection}>
                                <div className={s.tokenHeader}>
                                    <div className={s.name}>
                                        <h1>Name token</h1>
                                        <h3>Name token</h3>
                                    </div>
                                    <InputGroup className={s.tokenInput}>
                                        <FormControl
                                            placeholder="Your token"
                                            className="input-text"
                                            type="text"
                                            onChange={e => setToken(e.target.value)}
                                            value={token}
                                        />
                                    </InputGroup>
                                </div>
                                <div className={s.tokenBody}>
                                    <img src={logo} className={s.logo} alt="logo"/>
                                    <div className={s.tokenForm}>
                                        <div className={s.leftSide}>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Market cap
                                                    <FormControl
                                                        placeholder="Market cap"
                                                        className="input-text"
                                                        value={marketCup}
                                                        onChange={e => setMarketCup(e.target.value)}
                                                        type="text"
                                                    />
                                                </label>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Price
                                                    <FormControl
                                                        placeholder="Price"
                                                        className="input-text"
                                                        value={price}
                                                        onChange={e => setPrice(e.target.value)}
                                                        type="text"
                                                    />
                                                </label>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Launch
                                                    <FormControl
                                                        placeholder="Price"
                                                        className="input-text"
                                                        value={launch}
                                                        onChange={e => setLaunch(e.target.value)}
                                                        type="text"
                                                    />
                                                </label>
                                            </InputGroup>
                                        </div>
                                        <div className={s.rightSide}>
                                            <div className={s.statisticBlock}>
                                                {
                                                    statistic.map((item, index) => {
                                                        return (
                                                            <div key={index} className={s.btnWrapper}>
                                                                <Button
                                                                    variant="info"
                                                                    className="fill-btn"
                                                                    style={{maxHeight: '32px', marginRight: '-5px'}}
                                                                >
                                                                    {item.name}
                                                                </Button>
                                                                <OutlineBtn>
                                                                    <span>{item.val}</span>
                                                                </OutlineBtn>
                                                            </div>
                                                        )
                                                    })
                                                }
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
                    }
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
                    <section className={s.coinsRateSection}>
                        <SectionSeparator sectionName={`Coins rate`}/>
                        <div className={s.coinsTableWrapper}>
                            <CoinsRateTable/>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default CoinOpenPage;
