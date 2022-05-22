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
import CustomBadge from "../components/UI/CustomBadge/CustomBadge";
import {fetchHotNotificationsAction} from "../reducers/hotNotification";

const CoinOpenPage = ({currentUser, errors, pageId, innerCoin, curVotes, votes, coins, hotNotifications}) => {
    const dispatch = useDispatch();
    const currentVotes = useSelector(state => state.vote.curVotes)
    const allVotes = useSelector(state => state.vote.votes)
    const curUser = useSelector(state => state.currentUser.user)
    const [chain, setChain] = useState('Chains')
    const [isGetResponse, setIsGetResponse] = useState(false)

    const [chainsStr, setChainsStr] = useState(null)
    const [curCoin, setCurCoin] = useState(innerCoin)

    const [pancakeswap, setPancakeswap] = useState(null)
    const [uniswap, setUniswap] = useState(null)

    useEffect(() => {
        if (!isGetResponse) {
            dispatch(fetchCoinAction(coins));
            dispatch(setCurrentUserAction(currentUser))
            console.log('CoinOpenPage pageId', innerCoin)
            dispatch(setCurrentInnerCoinAction(innerCoin));
            dispatch(fetchCurrentVotesAction(curVotes));
            dispatch(fetchVotesAction(votes));
            dispatch(fetchHotNotificationsAction(hotNotifications))
            chainsString()
            if (innerCoin.coin_chains.length > 0) {
                const cakeSwap = innerCoin.coin_chains.find(i => i.chain === 'bsc')
                if (cakeSwap) setPancakeswap(cakeSwap)
                const uniSwap = innerCoin.coin_chains.find(i => i.chain === 'eth')
                if (uniSwap) setUniswap(uniSwap)
            }
            // dispatch(setErrorsAction(errors))
            /* if (curCoin && curCoin.is_coin_gecko) {
                 const urlParts = curCoin.coin_gecko_link.split('/')
                 const geckoId = urlParts[urlParts.length - 1]
                 console.log('send request to coin gecko', geckoId)
                 if (urlParts[urlParts.length - 1])
                     getCoinGeckoLiteData(geckoId)
             }
             if (curCoin && !curCoin.is_coin_gecko
                 && curCoin.coin_chains[0].contract_address &&
                 !curCoin.coin_chains[0].chain.includes('miannet')) {
                 console.log('send molaris')
                 getSingleRecordMoralis(
                     curCoin.coin_chains[0].contract_address,
                     curCoin.coin_chains[0].chain
                 ).then(res => {
                     if (res.status === 200) {
                         // console.log('molarisData', res);
                         const oneHour = curCoin.price > res.data.usdPrice ?
                             -(res.data.usdPrice / curCoin.price * 100) :
                             curCoin.price / res.data.usdPrice * 100
                         setCurCoin({
                             ...curCoin,
                             price: res.data.usdPrice,
                             market_cap: curCoin.circulating_supply * res.data.usdPrice,
                             one_hour: oneHour
                         })

                     }
                 }).finally(() => setIsGetResponse(true));
             }*/
        }
    },);

    const chainsString = () => {
        if (curCoin && curCoin.coin_chains.length) {
            let exp = '';
            for (let i = 0; i < curCoin.coin_chains.length; i++) {
                if (i < curCoin.coin_chains.length - 1)
                    exp += curCoin.coin_chains[i].chain + ', '
                else exp += curCoin.coin_chains[i].chain
            }
            console.log('EXP', exp)
            setChainsStr(exp)
        }
    };


    const getCoinGeckoLiteData = (
        nameId, tickers = false, market_data = true, community_data = false,
        developer_data = false, sparkline = false
    ) => {
        const dopData = `tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}&sparkline=${sparkline}`
        console.log('data', dopData)
        axios.get(`${GECKO_ROOT_PATH}/coins/${nameId}?${dopData}`)
            .then(res => {
                console.log('getCoinGeckoLiteData CURRENT', res)

                if (res.data) {
                    setCurCoin({
                        ...curCoin,
                        ['logotype']: res.data.image.large || curCoin.logotype,
                        ['symbol']: res.data.symbol,
                        ['price']: res.data.market_data.current_price.usd,
                        ['market_cap']: res.data.market_data.market_cap.usd,
                        ['launch_date']: res.data.genesis_date || curCoin.launch_date
                    })
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
                        // coin_id: innerCurrentCoin.id
                        coin_id: curCoin.id
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
                        curCoin &&
                        <section className={s.tokenSection}>
                            <div className={s.tokenHeader}>
                                <div className={s.name}>
                                    <h1>{curCoin.name}</h1>
                                    <h3>{curCoin.symbol}</h3>
                                    <div>
                                        {
                                            curCoin.is_kyc ? <CustomBadge data={'KYC'}/> : ''
                                        }
                                    </div>
                                </div>
                                <InputGroup className={s.tokenInput}>
                                    {
                                        curCoin.coin_chains &&
                                        curCoin.coin_chains.length &&
                                        <DropdownButton
                                            id="dropdown-custom"
                                            className='dropdown-custom'
                                            title={chain}
                                        >
                                            {
                                                curCoin.coin_chains.length &&
                                                curCoin.coin_chains.map(i => {
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
                                        <img src={curCoin.logotype} alt="logo"/>
                                    </div>
                                </div>
                                <div className={`mb-3 mt-3 ${s.tokenForm}`}>
                                    <div className={s.leftSide}>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Market cap
                                                <FormControl
                                                    placeholder="Market cap"
                                                    className="input-text"
                                                    value={`$${curCoin.market_cap || '0'}`}
                                                    type="text"
                                                    disabled
                                                />
                                            </label>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Price
                                                {/*<FormControl
                                                    placeholder="Price"
                                                    className="input-text"
                                                    type="text"
                                                    dangerouslySetInnerHTML={{}}
                                                    disabled
                                                />*/}
                                                <div
                                                    className="input-text"
                                                    style={{
                                                        backgroundColor: '#181c3f',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        paddingLeft: '8px',
                                                        color: 'white',
                                                        fontWeight: 700
                                                    }}
                                                    dangerouslySetInnerHTML={{__html: `<span style="color: rgb(125, 215, 92); margin-right: 5px;">$</span> ${curCoin.price || '0'}`}}
                                                />
                                            </label>
                                        </InputGroup>
                                        {
                                            curCoin.one_hour ?
                                                <InputGroup className="mb-3">
                                                    <label className="input-label">
                                                        1 H
                                                        <div
                                                            className="input-text"
                                                            style={{
                                                                backgroundColor: '#181c3f',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingLeft: '8px',
                                                                color: 'white',
                                                                fontWeight: 700
                                                            }}>
                                                            {
                                                                curCoin.one_hour > 0 ?
                                                                    <div
                                                                        style={{
                                                                            color: '#7dd75c'
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                            marginRight: '5px',
                                                                            color: '#7dd75c'
                                                                        }}
                                                                        >
                                                                            &uarr;
                                                                        </span>
                                                                        {curCoin.one_hour}%
                                                                    </div>
                                                                    :
                                                                    <div
                                                                        style={{
                                                                            color: '#ef3e3e'
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                marginRight: '5px',
                                                                                color: '#ef3e3e'
                                                                            }}
                                                                        >
                                                                            &darr;
                                                                        </span>
                                                                        {curCoin.one_hour}%
                                                                    </div>
                                                            }
                                                        </div>
                                                    </label>
                                                </InputGroup>
                                                :
                                                <div/>

                                        }

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Launch
                                                <FormControl
                                                    placeholder="Price"
                                                    className="input-text"
                                                    value={curCoin.launch_date || '0'}
                                                    type="text"
                                                    disabled
                                                />
                                            </label>
                                        </InputGroup>
                                        {
                                            chainsStr &&
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    Chains
                                                    <FormControl
                                                        placeholder="Price"
                                                        className="input-text"
                                                        value={chainsStr}
                                                        type="text"
                                                        disabled
                                                    />
                                                </label>
                                            </InputGroup>
                                        }
                                    </div>
                                    <div className={s.rightSide}>
                                        <div className={s.statisticBlock}>
                                            {
                                                currentVotes &&
                                                <div className={s.btnWrapper}
                                                     style={{width: '200px'}}>
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
                                                {curCoin.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    }
                    <section className={s.buttonSection}>
                        {
                            curCoin && curCoin.contractTelegram &&
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={e => window.open(curCoin.contractTelegram, '_blank').focus()}
                                className={`btn-big btn-violet mb-3`}
                            >
                                Telegram
                            </Button>
                        }
                        {
                            curCoin && curCoin.contractTwitter &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-orange  mb-3`}
                                onClick={e => window.open(curCoin.contractTwitter, '_blank').focus()}
                            >
                                Twitter
                            </Button>
                        }
                        {
                            curCoin && curCoin.contractReddit &&
                            <Button
                                variant="primary"
                                size="lg"
                                className={`btn-big btn-violet mb-3`}
                                onClick={e => window.open(curCoin.contractReddit, '_blank').focus()}
                            >
                                Reddit
                            </Button>
                        }
                        {
                            curCoin && curCoin.contractWeb &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-orange mb-3`}
                                onClick={e => window.open(curCoin.contractWeb, '_blank').focus()}
                            >
                                Web
                            </Button>
                        }

                        {
                            pancakeswap &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-violet mb-3`}
                                onClick={e => window.open(`https://pancakeswap.finance/swap?outputCurrency=${pancakeswap.contract_address}`, '_blank').focus()}
                            >
                                Pancakeswap
                            </Button>
                        }

                        {
                            uniswap &&
                            <Button
                                variant="danger"
                                size="lg"
                                className={`btn-big btn-orange  mb-3`}
                                onClick={e => window.open(`https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=${uniswap.contract_address}`, '_blank').focus()}
                            >
                                Uniswap
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
