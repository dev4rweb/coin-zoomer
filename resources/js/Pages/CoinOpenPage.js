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
import {setCurrentInnerCoinAction} from "../reducers/coinReducer";

const CoinOpenPage = ({currentUser, errors, pageId, innerCoin}) => {
    const dispatch = useDispatch();
    const currentCoin = useSelector(state => state.coinGecko.currentCoin)
    const innerCurrentCoin = useSelector(state => state.coin.currentInnerCoin)
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
        if (pageId.length > 3) {
            dispatch(geckoGetCurrentCoin(pageId));
        } else {
            dispatch(setCurrentInnerCoinAction(innerCoin))
            console.log('Internal coin', innerCoin)
        }
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
                                    <div className={s.logo}>
                                        <div className={s.logoWrapper}>
                                            <img src={currentCoin.image.large} alt="logo"/>
                                        </div>
                                    </div>

                                    <div className={s.tokenForm}>
                                        <div className={s.leftSide}>
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Chain
                                                    {
                                                        currentCoin.symbol ?
                                                            <FormControl
                                                                placeholder="Market cap"
                                                                className="input-text"
                                                                value={`${currentCoin.symbol}`}
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
                                                    Market cap
                                                    {
                                                        currentCoin.market_data.market_cap.usd ?
                                                            <FormControl
                                                                placeholder="Market cap"
                                                                className="input-text"
                                                                value={`$ ${currentCoin.market_data.market_cap.usd}`}
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
                                                                value={`$ ${currentCoin.market_data.current_price.usd}`}
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
                                                <p dangerouslySetInnerHTML={{__html: currentCoin.description.en.slice(0, 600)}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            :
                            innerCurrentCoin ?
                                <section className={s.tokenSection}>
                                    <div className={s.tokenHeader}>
                                        <div className={s.name}>
                                            <h1>{innerCurrentCoin.name}</h1>
                                            <h3>{innerCurrentCoin.symbol}</h3>
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
                                        <div className={s.logo}>
                                            <div className={s.logoWrapper}>
                                                <img src={innerCurrentCoin.logotype} alt="logo"/>
                                            </div>
                                        </div>
                                        <div className={s.tokenForm}>
                                            <div className={s.leftSide}>
                                                <InputGroup className="mb-3">
                                                    <label className="input-label">
                                                        Market cap
                                                        <FormControl
                                                            placeholder="Market cap"
                                                            className="input-text"
                                                            value={`$${innerCurrentCoin.market_cap}`}
                                                            type="text"
                                                            disabled
                                                        />
                                                    </label>
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <label className="input-label">
                                                        Price
                                                        <FormControl
                                                            placeholder="Price"
                                                            className="input-text"
                                                            value={`$${innerCurrentCoin.price}`}
                                                            type="text"
                                                            disabled
                                                        />
                                                    </label>
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <label className="input-label">
                                                        Launch
                                                        <FormControl
                                                            placeholder="Price"
                                                            className="input-text"
                                                            value={innerCurrentCoin.launch_date}
                                                            type="text"
                                                            disabled
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
                                                        {innerCurrentCoin.description}
                                                    </p>
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
                                                        You are in the right place and your ad will be shown to the
                                                        right people.
                                                        Driving traffic is our bread and butter and we are constantly
                                                        growing.
                                                    </p>
                                                    <p>
                                                        You are in the right place and your ad will be shown to the
                                                        right people.
                                                        Driving traffic is our bread and butter and we are constantly
                                                        growing.You
                                                        are in the right place and your ad will be shown to the right
                                                        people.
                                                        Driving traffic is our bread and butter and we are constantly
                                                        growing.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                    }
                    <section className={s.buttonSection}>
                        {
                            innerCurrentCoin && innerCurrentCoin.contractTelegram &&
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={e => alert(`telegram ${innerCurrentCoin.contractTelegram}`)}
                                className={`btn-big btn-violet`}
                            >
                                Telegram
                            </Button>
                        }
                        {
                            innerCurrentCoin && innerCurrentCoin.contractTwitter &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-orange`}
                                onClick={e => alert(`Twitter ${innerCurrentCoin.contractTwitter}`)}
                            >
                                Twitter
                            </Button>
                        }
                        {
                            innerCurrentCoin && innerCurrentCoin.contractReddit &&
                            <Button
                                variant="primary"
                                size="lg"
                                className={`btn-big btn-violet`}
                                onClick={e => alert(`Reddit ${innerCurrentCoin.contractReddit}`)}
                            >
                                Reddit
                            </Button>
                        }
                        {
                            innerCurrentCoin && innerCurrentCoin.contractWeb &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-orange`}
                                onClick={e => alert(`Web ${innerCurrentCoin.contractWeb}`)}
                            >
                                Web
                            </Button>
                        }
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
