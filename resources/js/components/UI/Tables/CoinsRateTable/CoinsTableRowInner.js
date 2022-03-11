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

const CoinsTableRowInner = ({data}) => {
    const dispatch = useDispatch()
    const curUser = useSelector(state => state.currentUser.user)
    const votes = useSelector(state => state.vote.votes)
    const coinsGeckoList = useSelector(state => state.coinGecko.coinsList)
    let currentVotes = votes.filter(i => i.coin_id === data.id) || []
    let datFormat = null
    const [difData, setDifData] = useState(data)


    useEffect(() => {
        // console.log('CoinsTableRowInner', coinsGeckoList, data.name, difData.is_coin_gecko)
        if (difData.is_coin_gecko && coinsGeckoList.length) {
            const coinGecko = coinsGeckoList.find(i => i.id === difData.name)
            if (coinGecko) {
                console.log('CoinsTableRowInner coinGecko', coinGecko)
                getCoinGeckoLiteData(coinGecko.id)
            }
        }
    }, [coinsGeckoList]);

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
                if (res.data) {
                    setDifData({
                        ...difData,
                        ['logotype']: res.data.image.small,
                        ['symbol']: res.data.symbol,
                        ['price']: res.data.market_data.current_price.usd,
                        ['market_cap']: res.data.market_data.market_cap.usd,
                        ['launch_date']: res.data.genesis_date
                    })
                }
            })
            .catch(err => {
                console.log('getCoinGeckoLiteData err', err)
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
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (curUser) {
                const todayVotes = getTodayVotes(votes.filter(i => i.user_id === curUser.id))
                console.log('todayVotes', todayVotes)
                // console.log('todayVotes user', curUser)
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
                    <p>{difData.name}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {difData.symbol}
                </div>
            </td>
            <td>
                <div>12.993%</div>
            </td>
            <td className={s.symbol}>
                <div>
                    {`$ ${difData.price}`}
                </div>
            </td>
            <td>
                <div><span>$</span> {difData.market_cap}</div>
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
                        style={{maxHeight: '32px', marginRight: '-5px'}}
                    >
                        Vote
                    </Button>
                    {
                        currentVotes.length &&
                        <OutlineBtn>
                            <span>{currentVotes.length}</span>
                        </OutlineBtn>
                    }
                </div>
            </td>
        </tr>
    );
};

export default CoinsTableRowInner;
