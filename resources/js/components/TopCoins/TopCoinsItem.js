import React, {useEffect, useState} from 'react';
import s from '../../../sass/components/TopCoins/TopCoinsItem/TopCoinsItem.module.scss'
import starImg from '../../../assets/img/top_coins/star.png'
import partStarImg from '../../../assets/img/top_coins/part-star.png'
import Increase from "../UI/Increase/Increase";
import {getSingleRecordMoralis} from "../../asyncAction/coinMolaris";
import {GECKO_ROOT_PATH, PATH_COIN_OPEN_PAGE} from "../../utils/routesPath";
import {Inertia} from "@inertiajs/inertia";
import {useDispatch, useSelector} from "react-redux";
import {setTheBestLeaderAction} from "../../reducers/leadersCoinsReducer";

const TopCoinsItem = ({data, index}) => {

    const bestLeader = useSelector(state => state.leaderCoins.theBestLeader)
    const dispatch = useDispatch()

    const [difData, setDifData] = useState(data)
    // console.log('TopCoinsItem', difData)
    /*useEffect(() => {
        if (!difData.is_coin_gecko && difData.coin_chains && difData.coin_chains.length &&
            difData.coin_chains[0].contract_address &&
            !difData.coin_chains[0].chain.includes('miannet')) {

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
                        // price: priceConverter(res.data.usdPrice),
                        price: res.data.usdPrice,
                        one_hour: oneHour
                    })
                    if (bestLeader.id == difData.id)
                        dispatch(setTheBestLeaderAction(difData))
                }
            });
        }
    },[]);*/

    /*useEffect(() => {
        if (!difData.is_fake) {
            if (difData.is_coin_gecko) {
                const urlParsed = difData.coin_gecko_link.split('/')
                // console.log('DIFDATA LIGHT COIN', urlParsed[urlParsed.length - 1])
                // console.log('CoinsTableRowInner coinGecko', urlParsed[urlParsed.length - 1])
                if (urlParsed[urlParsed.length - 1])
                    getCoinGeckoLiteData(urlParsed[urlParsed.length - 1])
            }
        }
    }, []);*/

    const getCoinGeckoLiteData = (
        nameId, tickers = false, market_data = true, community_data = false,
        developer_data = false, sparkline = false
    ) => {
        const dopData = `tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}&sparkline=${sparkline}`

        axios.get(`${GECKO_ROOT_PATH}/coins/${nameId}?${dopData}`)
            .then(res => {
                // console.log('getCoinGeckoLiteData', res)
                difData.price_change_percentage_1h_in_currency = res.data.market_data.price_change_percentage_1h_in_currency.usd
                if (res.data) {
                    const result = setDifData({
                        ...difData,
                        ['logotype']: res.data.image.small,
                        ['symbol']: res.data.symbol,
                        ['price']: res.data.market_data.current_price.usd,
                        ['market_cap']: res.data.market_data.market_cap.usd,
                        ['launch_date']: res.data.genesis_date ?? difData.launch_date,
                        ['one_hour']: res.data.market_data.price_change_percentage_1h_in_currency.usd || 0
                    })
                    if (bestLeader.id == difData.id) {
                        console.log('UPDATE', difData, bestLeader)
                        dispatch(setTheBestLeaderAction({
                            ...difData,
                            ['logotype']: res.data.image.small,
                            ['symbol']: res.data.symbol,
                            ['price']: res.data.market_data.current_price.usd,
                            ['market_cap']: res.data.market_data.market_cap.usd,
                            ['launch_date']: res.data.genesis_date ?? difData.launch_date,
                            ['one_hour']: res.data.market_data.price_change_percentage_1h_in_currency.usd || 0
                        }));
                    }

                }
                // console.log('getCoinGeckoLiteData difData', difData)
            })
            .catch(err => {
                console.log('getCoinGeckoLiteData err', err)
            });
    };

    const handleClick = e => {
        console.log('TopCoinsItem click', data)
        if (e.target.tagName !== 'BUTTON')
            // Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.name.replaceAll(' ', '_')}`)
    };

    return (
        <li className={`${s.coinItem}`} onClick={handleClick}>
            <span className={s.num}>{index + 1}</span>
            <div className={s.content}>
                <img className={s.logo} src={difData.logotype} alt="logo"/>
                <div className={s.data}>
                    <p className={s.name}>{difData.name}</p>
                    {
                        difData && difData.one_hour ?
                            difData.one_hour > 0 ?
                                <div className={s.greenCol}>
                                    <span style={{marginRight: '5px'}}>&uarr;</span>
                                    {difData.one_hour_formatted}%
                                    {/*{difData.one_hour.toFixed(8)}%*/}
                                </div>
                                :
                                <div className={s.redCol}>
                                    <span style={{marginRight: '5px'}}>&darr;</span>
                                    {difData.one_hour_formatted}%
                                    {/*{difData.one_hour.toFixed(8)}%*/}
                                </div>
                            :
                            <div>0.0%</div>
                    }
                    {/*<Increase/>*/}
                </div>
                <p className={s.price}>
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {/*{priceConverter(difData.price)}*/}
                    {difData.price_formatted}
                </p>
                {
                    difData.is_promoted ?
                        <img src={starImg} alt="star"/> :
                        <img src={partStarImg} alt="star"/>
                }
            </div>
        </li>
    );
};

export default TopCoinsItem;
