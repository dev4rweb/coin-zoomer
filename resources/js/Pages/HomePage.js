import React, {useEffect, Suspense} from 'react';
import s from '../../sass/pages/HomePage/HomePage.module.scss'
import Layout from "../components/Layout";
import bg from "../../assets/design/index.png"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import {Button, Container} from "react-bootstrap";
import Medal from "../components/Medal/Medal";
// import SimpleTable from "../components/UI/Tables/SimpleTable/SimpleTable";
import dogWin from '../../assets/img/win-dog.png'
import GraphicIncrease from "../components/UI/GraphicIncrease/GraphicIncrease";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
// import TopCoins from "../components/TopCoins/TopCoins";
import oneImg from '../../assets/img/top_coins/one.png'
import twoImg from '../../assets/img/top_coins/two.png'
import threeImg from '../../assets/img/top_coins/three.png'
import fourImg from '../../assets/img/top_coins/four.png'
import fiveImg from '../../assets/img/top_coins/five.png'
// import CoinsRateTable from "../components/UI/Tables/CoinsRateTable/CoinsRateTable";
import TimeFilter from "../components/UI/Filters/TimeFilter/TimeFilter";
import CategoryFilter from "../components/UI/Filters/CategoryFilter/CategoryFilter";
import Searching from "../components/UI/Filters/Searching/Searching";
import LeadersCard from "../components/LeadersCard/LeadersCard";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";
// import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADD_COIN_PAGE, PATH_COIN_OPEN_PAGE} from "../utils/routesPath";
import {geckoGetPing} from "../asyncAction/coinGecko";
import {fetchCoinAction, setCoinPageLimitAction, setTableRateLimitAction} from "../reducers/coinReducer";
import {fetchCoinByQuery, fetchCoinByQueryObj, fetchTopCoins} from "../asyncAction/coinInner";
import {fetchVotesAction} from "../reducers/voteReducer";
import Paginate from "../components/UI/Pagination/Paginate";
import {fetchHotNotificationsAction} from "../reducers/hotNotification";
import {Head} from '@inertiajs/inertia-react'
import Loader from "../components/UI/Loader/Loader";
import LazyBackground from '../components/LazyBackground'


const SimpleTable = React.lazy(() => import("../components/UI/Tables/SimpleTable/SimpleTable"));
const CoinsRateTable = React.lazy(() => import('../components/UI/Tables/CoinsRateTable/CoinsRateTable'))
const TopCoins = React.lazy(() => import('../components/TopCoins/TopCoins'))
const LeadersSubscribeBlock = React.lazy(() => import('../components/LeadersSubscribeBlock/LeadersSubscribeBlock'))

const HomePage = ({currentUser, errors, coins, votes, hotNotifications}) => {
    const dispatch = useDispatch();
    const sortObj = useSelector(state => state.coin.sortObj)
    // const topCoinsGecko = useSelector(state => state.coinGecko.topCoinsGecko)
    const topHourCoins = useSelector(state => state.topCoins.topCoinsByHour)
    const topDayCoins = useSelector(state => state.topCoins.topCoinsByDay)
    const topWeekCoins = useSelector(state => state.topCoins.topCoinsByWeek)
    const bestCoin = useSelector(state => state.leaderCoins.theBestLeader)


    const topCoinsData = [
        {id: 1, logo: oneImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 2, logo: twoImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 3, logo: threeImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 4, logo: fourImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: false},
        {id: 5, logo: fiveImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: false},
    ]

    // useEffect(() => {
    //     console.log('TOP_COINS_GECKO', topCoinsGecko)
    // }, [topCoinsGecko]);

    /*useEffect(() => {
        const jsonData = require('../../assets/json/coins.json')
        console.log('creating data', jsonData)
    }, []);*/


    useEffect(() => {
        console.log('HomePage', coins)
        // console.log('HomePage process', process.env.MIX_HTTP_PATH) doesn't work
        // getSingleRecordMoralis().then(res => console.log('HOME', res.data))

        dispatch(setCurrentUserAction(currentUser))
        // dispatch(geckoGetPing(sortObj))
        dispatch(fetchCoinAction(coins))
        dispatch(fetchVotesAction(votes))
        dispatch(fetchTopCoins('hour'))
        dispatch(fetchTopCoins('day'))
        dispatch(fetchTopCoins('week'))
        dispatch(fetchTopCoins('leader_day'))
        dispatch(fetchTopCoins('leader_week'))
        dispatch(fetchTopCoins('leader_market_cap'))

        dispatch(fetchHotNotificationsAction(hotNotifications))

        // dispatch(setErrorsAction(errors))
    }, []);

    /*    useEffect(() => {
            console.log('BEST COIN', bestCoin)
        }, [bestCoin]);*/

    const changeLimit = async (e, lim) => {
        dispatch(setCoinPageLimitAction(lim))
        sortObj.limit = lim
        sortObj.page = 1
        dispatch(fetchCoinByQueryObj(sortObj))
    };

    const addCoinHandler = e => {
        // console.log('addCoinHandler')
        Inertia.visit(PATH_ADD_COIN_PAGE)
    };

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <LazyBackground
                className={s.homePage}
                src='/images/polygonal-blue-abstract.png'
                placeholder='/images/polygonal-blue-abstract.png'
            >

                {/*<div className={s.homePage}>*/}
                    <Container>
                        <section className={s.mainSection}>
                            <div className={s.alertWrapper}>
                                <CustomAlert/>
                            </div>
                            <div className={s.titleWrapper}>
                                <h1 className="title-gradient">Maybe your coin will be the best? </h1>
                                <p>It's easy to check. Register and fill in your coin. People will</p>
                                <Button
                                    variant="info"
                                    style={{width: '160px'}}
                                    onClick={addCoinHandler}
                                >
                                    Add coin
                                </Button>
                            </div>
                            <div className={s.medalBlock}>
                                <Medal>
                                    <p>Promoted coins</p>
                                </Medal>
                                {
                                    bestCoin &&
                                    <Medal isRight={true}>
                                        <p>Top Daily Winner</p>
                                    </Medal>
                                }

                            </div>
                            <div className={s.tableBlock}>
                                <Suspense fallback={<Loader/>}>
                                    <SimpleTable/>
                                </Suspense>

                                {
                                    bestCoin &&
                                    <div className={s.rightSide}>
                                        <div className={s.winWrapper}>
                                            <img className={s.dogWin} src={dogWin} alt="dog"/>
                                            <img
                                                className={s.coinLogo}
                                                src={bestCoin.logotype}
                                                onClick={event => Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${bestCoin.name.replaceAll(' ', '_')}`)}
                                                alt="logo"
                                            />
                                        </div>

                                        <div className={s.dataWrapper}>
                                            <h2>{bestCoin.name}</h2>
                                            <div className={s.graphWrapper}>
                                                {/*<GraphicIncrease text={bestCoin.one_hour.toFixed(7) || '0'}/>*/}
                                                {
                                                    bestCoin.one_hour ?
                                                        <GraphicIncrease text={bestCoin.one_hour_formatted}/> :
                                                        <GraphicIncrease text={0}/>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </section>

                        <section className={s.topCoinsSection}>
                            <SectionSeparator sectionName={`Tap coins`}/>

                            <div className={s.cardWrapper}>
                                {
                                    topHourCoins &&
                                    <Suspense fallback={<Loader/>}>
                                        <TopCoins
                                            title={'coins of the 1h'}
                                            data={topHourCoins.data.sort((a, b) => b.hour_votes - a.hour_votes)}
                                        />
                                    </Suspense>
                                }

                                {
                                    topDayCoins &&
                                    <Suspense fallback={<Loader/>}>
                                        <TopCoins
                                            title={'coins of the 24h'}
                                            classBg={'pink'}
                                            data={topDayCoins.data.sort((a, b) => b.today_votes - a.today_votes)}
                                        />
                                    </Suspense>
                                }

                                {
                                    topWeekCoins &&
                                    <Suspense fallback={<Loader/>}>
                                        <TopCoins
                                            title={'coins of the week'}
                                            classBg={'blue'}
                                            data={topWeekCoins.data.sort((a, b) => b.week_votes - a.week_votes)}
                                        />
                                    </Suspense>
                                }

                            </div>
                        </section>

                        <section className={s.coinsRateSection}>
                            <SectionSeparator sectionName={`Coins rate`}/>
                            {/*<div className={s.coinsTableWrapper}>
                            <CoinsRateTable coins={coins} />
                        </div>*/}
                            <div className={s.filterTableWrapper}>
                                <div className={s.filterWrapper}>
                                    <TimeFilter/>
                                    <CategoryFilter/>
                                    <Searching/>
                                </div>
                                <Suspense fallback={<Loader/>}>
                                    <CoinsRateTable coins={coins}/>
                                </Suspense>
                                <Paginate/>
                                <div className="d-flex justify-content-center mt-3">
                                    {
                                        sortObj.limit === 10 ?
                                            <Button
                                                variant="info"
                                                onClick={e => changeLimit(e, 100)}
                                            >
                                                Show more
                                            </Button>
                                            :
                                            <Button
                                                variant="info"
                                                onClick={e => changeLimit(e, 10)}
                                            >
                                                Show less
                                            </Button>
                                    }
                                </div>
                            </div>
                        </section>


                    </Container>
                    <Suspense fallback={<Loader/>}>
                        <LeadersSubscribeBlock/>
                    </Suspense>
                {/*</div>*/}
            </LazyBackground>
        </Layout>
    );
};

export default HomePage;
