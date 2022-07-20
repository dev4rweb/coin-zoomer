import React, {useEffect, useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import {GECKO_ROOT_PATH, PATH_COIN_OPEN_PAGE, PATH_LOGIN_PAGE} from "../../../../utils/routesPath";
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import GraphicIncrease from "../../GraphicIncrease/GraphicIncrease";
import {Button} from "react-bootstrap";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentInnerCoinAction} from "../../../../reducers/coinReducer";
import {addVote} from "../../../../asyncAction/votes";
import {setErrorsAction, setLoadingAction} from "../../../../reducers/errorsReducer";
import {getTimeToNight, getTodayVotes} from "../../../../asyncAction/voteTimer";
import {fillUserVoteLimit} from "../../../../asyncAction/user";
import axios from "axios";
import {priceConverter} from "../../../../utils/priceConverter";
import {getSingleRecordMoralis} from "../../../../asyncAction/coinMolaris";
import CustomBadge from "../../CustomBadge/CustomBadge";

const CoinsTableRowInner = ({data}) => {
    const dispatch = useDispatch()
    const curUser = useSelector(state => state.currentUser.user)
    const votes = useSelector(state => state.vote.votes)

    // const coinsGeckoList = useSelector(state => state.coinGecko.coinsList)
    let currentVotes = votes.filter(i => i.coin_id === data.id) || []
    const [difData, setDifData] = useState(data)


    /*useEffect(() => {

        // console.log('CoinsTableRowInner', coinsGeckoList, data.name, difData.is_coin_gecko)
        if (!difData.is_fake) {
            if (difData.is_coin_gecko) {
                const urlParsed = difData.coin_gecko_link.split('/')
                // console.log('DIFDATA LIGHT COIN', urlParsed[urlParsed.length - 1])
                // console.log('CoinsTableRowInner coinGecko', urlParsed[urlParsed.length - 1])
                if (urlParsed[urlParsed.length - 1])
                    getCoinGeckoLiteData(urlParsed[urlParsed.length - 1])
            }


            /!*if (difData.is_coin_gecko && coinsGeckoList.length) {
                const coinGecko = coinsGeckoList.find(i => i.id === difData.name);
                if (coinGecko) {
                    console.log('CoinsTableRowInner coinGecko', coinGecko)
                    getCoinGeckoLiteData(coinGecko.id)
                }
            }*!/
        }
    }, []);*/

    /*useEffect(() => {
        if (!difData.is_coin_gecko && difData.coin_chains.length
            && difData.coin_chains[0].contract_address &&
            !difData.coin_chains[0].chain.includes('miannet')) {
            // console.log('difData', difData)
            getSingleRecordMoralis(
                difData.coin_chains[0].contract_address,
                difData.coin_chains[0].chain
            ).then(res => {
                if (res.status === 200) {
                    // console.log('molarisData', res);
                    // console.log('DIF DATA', difData)
                    const oneHour = difData.price > res.data.usdPrice ?
                        -(res.data.usdPrice / difData.price * 100) :
                        difData.price / res.data.usdPrice * 100
                    setDifData({
                        ...difData,
                        price: res.data.usdPrice,
                        market_cap: difData.circulating_supply * res.data.usdPrice,
                        one_hour: oneHour
                    })
                }
            });
        }
    }, []);*/

    const dateFormat = date => {
        const d = new Date(date),
            dateFormat = [d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
                (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1),
                d.getFullYear()].join('-')/*+' '+
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':')*/;
        return dateFormat
    };

    const getCoinGeckoLiteData = (
        nameId, tickers = false, market_data = true, community_data = false,
        developer_data = false, sparkline = false
    ) => {
        const dopData = `tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}&sparkline=${sparkline}`

        axios.get(`${GECKO_ROOT_PATH}/coins/${nameId}?${dopData}`)
            .then(res => {
                console.log('getCoinGeckoLiteData', res)
                difData.price_change_percentage_1h_in_currency = res.data.market_data.price_change_percentage_1h_in_currency.usd
                if (res.data) {
                    setDifData({
                        ...difData,
                        ['logotype']: res.data.image.small,
                        ['symbol']: res.data.symbol,
                        ['price']: res.data.market_data.current_price.usd,
                        ['market_cap']: res.data.market_data.market_cap.usd,
                        ['launch_date']: res.data.genesis_date ?? difData.launch_date,
                        ['one_hour']: res.data.market_data.price_change_percentage_1h_in_currency.usd
                    })
                }
                // console.log('getCoinGeckoLiteData difData', difData)
            })
            .catch(err => {
                // console.log('getCoinGeckoLiteData err', err)
            });
    };

    /*    useEffect(() => {
            // console.log(data)
            currentVotes = votes.filter(i => i.coin_id === data.id)
            // console.log(currentVotes)
        }, votes);*/

    const handleClick = e => {
        console.log('StatusTableRow click', data)
        if (e.target.tagName !== 'BUTTON')
            // Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.name.replaceAll(' ', '_')}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (curUser) {
                const todayVotes = getTodayVotes(votes.filter(i => i.user_id === curUser.id))
                console.log('todayVotes', todayVotes)
                console.log('todayVotes user', curUser)
                if (todayVotes.length < 5) {
                    dispatch(addVote({
                        user_id: curUser.id,
                        coin_id: data.id
                    }));
                    dispatch(setErrorsAction({message: `left vote limits ${4 - todayVotes.length} of 5`}))

                } else {

                    dispatch(setErrorsAction({message: `vote limit exceeded. left - ${getTimeToNight()}`}));
                }
            } else {
                Inertia.visit(`${PATH_LOGIN_PAGE}`)
            }
        }
        // console.log('voteHandler ', e.currentTarget.tagName === 'BUTTON');
    };

    return (
        <tr className={s.tableItem} onClick={handleClick}>
            <td className={s.coinsCol}>
                <div className={s.coinsLong}>
                    <img src={difData.logotype} alt="coin"/>
                    <div>
                        <p>{difData.name}</p>
                        <div className="d-flex">
                            {
                                difData.is_kyc ? <CustomBadge data={'kyc'}/> : ''
                            }
                            {
                                difData.is_presale ? <CustomBadge data={'PRESALE'} /> : ''
                            }
                            {
                                difData.coin_chains && difData.coin_chains.length &&
                                difData.coin_chains.length > 0  ?
                                difData.coin_chains.map((item, index) => {
                                    if (index < 3) {
                                        return  <CustomBadge data={item.chain} key={index}/>

                                    }
                                })
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {difData.symbol}
                </div>
            </td>
            <td>
                {
                    difData.one_hour ?
                        difData.one_hour > 0 ?
                            <div className={s.greenCol}>
                                <span style={{marginRight: '5px'}}>&uarr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {difData.one_hour_formatted}%
                            </div>
                            : difData.one_hour < 0 ?
                            <div className={s.redCol}>
                                <span style={{marginRight: '5px'}}>&darr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {difData.one_hour_formatted}%
                            </div>
                            :
                            <div>0.0%</div>
                        :
                        <div>0.0%</div>
                }
            </td>
            <td className={s.symbol}>
                <div>
                    {/*{`$ ${difData.price}`}*/}
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {/*{priceConverter(difData.price)}*/}
                    {difData.price_formatted}
                </div>
            </td>
            <td>
                <div>
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {priceConverter(difData.market_cap)}
                </div>
            </td>
            <td>
                <div>
                    {dateFormat(difData.launch_date)}
                </div>
            </td>
            <td>
                <div style={{paddingRight: '15px', position: 'relative'}}>
                    <Button
                        variant="info"
                        className="fill-btn"
                        onClick={voteHandler}
                        style={{
                            maxHeight: '32px', marginRight: '-5px',
                            fontWeight: 'lighter', background: 'linear-gradient(90deg, #009fe6, #00f5f6)',
                            zIndex: '1'
                        }}
                    >
                        Vote
                    </Button>

                    <OutlineBtn>
                        <span>{currentVotes.length && currentVotes.length}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default CoinsTableRowInner;
