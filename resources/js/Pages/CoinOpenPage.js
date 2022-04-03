import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/CoinOpenPage/CoinOpenPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import Layout from "../components/Layout";
import {Button, Container, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import CoinsRateTable from "../components/UI/Tables/CoinsRateTable/CoinsRateTable";
import logo from '../../assets/img/token-logo-coin.png'
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import {geckoGetCurrentCoin} from "../asyncAction/coinGecko";
import {fetchCoinAction, setCurrentInnerCoinAction} from "../reducers/coinReducer";
import DropdownItem from "react-bootstrap/DropdownItem";
import {setErrorsAction} from "../reducers/errorsReducer";
import {addVote} from "../asyncAction/votes";
import {Inertia} from "@inertiajs/inertia";
import {GECKO_ROOT_PATH, PATH_LOGIN_PAGE} from "../utils/routesPath";
import {fetchCurrentVotesAction, fetchVotesAction} from "../reducers/voteReducer";
import {getTimeToNight, getTodayVotes} from "../asyncAction/voteTimer";
import axios from "axios";
import {getSingleRecordMoralis} from "../asyncAction/coinMolaris";

const CoinOpenPage = ({currentUser, errors, pageId, innerCoin, curVotes, votes, coins}) => {
    const dispatch = useDispatch();
    const innerCurrentCoin = useSelector(state => state.coin.currentInnerCoin)
    const currentVotes = useSelector(state => state.vote.curVotes)
    const allVotes = useSelector(state => state.vote.votes)
    const curUser = useSelector(state => state.currentUser.user)
    const [chain, setChain] = useState('Chains')
    const [isGetResponse, setIsGetResponse] = useState(false)

    useEffect(() => {
        if (!isGetResponse) {
            dispatch(fetchCoinAction(coins));
            dispatch(setCurrentUserAction(currentUser))
            console.log('CoinOpenPage pageId', innerCoin)
            dispatch(setCurrentInnerCoinAction(innerCoin));
            dispatch(fetchCurrentVotesAction(curVotes));
            dispatch(fetchVotesAction(votes));
            // dispatch(setErrorsAction(errors))
            if (innerCurrentCoin && innerCurrentCoin.is_coin_gecko) {
                const urlParts = innerCurrentCoin.coin_gecko_link.split('/')
                const geckoId = urlParts[urlParts.length - 1]
                console.log('send request to coin gecko', geckoId)
                getCoinGeckoLiteData(geckoId)
            }
            if(innerCurrentCoin && !innerCurrentCoin.is_coin_gecko){
                console.log('send molaris')
                getSingleRecordMoralis(
                    innerCurrentCoin.coin_chains[0].contract_address,
                    innerCurrentCoin.coin_chains[0].chain
                ).then(res => {
                    if (res.status === 200) {
                        // console.log('molarisData', res);
                        // console.log('DIF DATA', difData)
                        dispatch(setCurrentInnerCoinAction(({
                            ...innerCurrentCoin,
                            price: res.data.usdPrice,
                            market_cap: innerCurrentCoin.circulating_supply * res.data.usdPrice
                        })))
                        setIsGetResponse(true)
                    }
                });
            }
        }
    }, [innerCurrentCoin]);


    const getCoinGeckoLiteData = (
        nameId, tickers = false, market_data = true, community_data = false,
        developer_data = false, sparkline = false
    ) => {
        const dopData = `tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}&sparkline=${sparkline}`
        console.log('data', dopData)
        axios.get(`${GECKO_ROOT_PATH}/coins/${nameId}?${dopData}`)
            .then(res => {
                // console.log('getCoinGeckoLiteData CURRENT', res)
                // console.log('getCoinGeckoLiteData CURRENT INNER', innerCurrentCoin)

                if (res.data) {
                    dispatch(setCurrentInnerCoinAction({
                        ...innerCurrentCoin,
                        ['logotype']: res.data.image.large,
                        ['symbol']: res.data.symbol,
                        ['price']: res.data.market_data.current_price.usd,
                        ['market_cap']: res.data.market_data.market_cap.usd,
                        ['launch_date']: res.data.genesis_date
                    }))
                }
            })
            .catch(err => {
                // console.log('getCoinGeckoLiteData err', err)
            }).finally(() => setIsGetResponse(true));
    };

    const chainHandler = (e, contractAddress) => {
        e.preventDefault()
        setChain(contractAddress)
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            dispatch(setErrorsAction({message: 'Copied!'}));
            return navigator.clipboard.writeText(contractAddress);
        }

        return Promise.reject('The Clipboard API is not available.');
        // console.log('chainHandler')
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (curUser) {
                const todayVotes = getTodayVotes(allVotes.filter(i => i.user_id === curUser.id))
                console.log('todayVotes', todayVotes)
                console.log('todayVotes user', curUser)
                if (todayVotes.length < 5) {
                    dispatch(addVote({
                        user_id: curUser.id,
                        coin_id: innerCurrentCoin.id
                    }, true));

                    dispatch(setErrorsAction({message: `left vote limits ${4 - todayVotes.length} of 5`}))

                } else {
                    dispatch(setErrorsAction({message: `vote limit exceeded. Left - ${getTimeToNight()}`}));
                }

            } else {
                Inertia.visit(`${PATH_LOGIN_PAGE}`)
            }
        }
        // console.log('voteHandler ', e.currentTarget.tagName === 'BUTTON');
    };

    return (
        <Layout>
            <div className={s.coinOpenPage}>
                <Container className={s.wrapper}>
                    <CustomAlert/>
                    <BannerBlock/>
                    {
                        innerCurrentCoin &&
                        <section className={s.tokenSection}>
                            <div className={s.tokenHeader}>
                                <div className={s.name}>
                                    <h1>{innerCurrentCoin.name}</h1>
                                    <h3>{innerCurrentCoin.symbol}</h3>
                                </div>
                                <InputGroup className={s.tokenInput}>
                                    {
                                        innerCurrentCoin.coin_chains && innerCurrentCoin.coin_chains.length &&
                                        <DropdownButton
                                            id="dropdown-custom"
                                            className='dropdown-custom'
                                            title={chain}
                                        >
                                            {
                                                innerCurrentCoin.coin_chains.length &&
                                                innerCurrentCoin.coin_chains.map(i => {
                                                        if (i.chain && i.contract_address) {
                                                            return (
                                                                <DropdownItem
                                                                    onClick={event => chainHandler(event, i.contract_address)}
                                                                    as="button"
                                                                    title={i.chain}
                                                                    key={i.id}
                                                                >
                                                                    {i.chain} - {i.contract_address}
                                                                </DropdownItem>
                                                            )
                                                        }
                                                    }
                                                )
                                            }

                                        </DropdownButton>
                                    }

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
                                                currentVotes &&
                                                <div className={s.btnWrapper} style={{width: '200px'}}>
                                                    <Button
                                                        variant="info"
                                                        className="fill-btn"
                                                        style={{
                                                            maxHeight: '32px',
                                                            marginRight: '-5px',
                                                            minWidth: '70px'
                                                        }}
                                                        onClick={voteHandler}
                                                    >
                                                        Vote
                                                    </Button>
                                                    <OutlineBtn>
                                                        <span>{currentVotes.length}</span>
                                                    </OutlineBtn>
                                                </div>
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
                    }
                    <section className={s.buttonSection}>
                        {
                            innerCurrentCoin && innerCurrentCoin.contractTelegram &&
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={e => window.open(innerCurrentCoin.contractTelegram, '_blank').focus()}
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
                                onClick={e => window.open(innerCurrentCoin.contractTwitter, '_blank').focus()}
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
                                onClick={e => window.open(innerCurrentCoin.contractReddit, '_blank').focus()}
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
                                onClick={e => window.open(innerCurrentCoin.contractWeb, '_blank').focus()}
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
