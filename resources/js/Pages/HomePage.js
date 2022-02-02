import React, {useEffect} from 'react';
import s from '../../sass/pages/HomePage/HomePage.module.scss'
import Layout from "../components/Layout";
import bg from "../../assets/design/index.png"
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import {Button, Container} from "react-bootstrap";
import Medal from "../components/Medal/Medal";
import SimpleTable from "../components/UI/Tables/SimpleTable/SimpleTable";
import dogWin from '../../assets/img/win-dog.png'
import GraphicIncrease from "../components/UI/GraphicIncrease/GraphicIncrease";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import TopCoins from "../components/TopCoins/TopCoins";
import oneImg from '../../assets/img/top_coins/one.png'
import twoImg from '../../assets/img/top_coins/two.png'
import threeImg from '../../assets/img/top_coins/three.png'
import fourImg from '../../assets/img/top_coins/four.png'
import fiveImg from '../../assets/img/top_coins/five.png'
import CoinsRateTable from "../components/UI/Tables/CoinsRateTable/CoinsRateTable";
import TimeFilter from "../components/UI/Filters/TimeFilter/TimeFilter";
import CategoryFilter from "../components/UI/Filters/CategoryFilter/CategoryFilter";
import Searching from "../components/UI/Filters/Searching/Searching";
import LeadersCard from "../components/LeadersCard/LeadersCard";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADD_COIN_PAGE} from "../utils/routesPath";
import {geckoGetPing} from "../asyncAction/coinGecko";
import {fetchCoinAction} from "../reducers/coinReducer";

const HomePage = ({currentUser, errors, coins}) => {
    const dispatch = useDispatch();
    const topCoinsData = [
        {id: 1, logo: oneImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 2, logo: twoImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 3, logo: threeImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: true},
        {id: 4, logo: fourImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: false},
        {id: 5, logo: fiveImg, name: 'CoinName', isIncrease: true, val: `12.993%`, price: '$ 475.45', isFav: false},
    ]

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(geckoGetPing())
        dispatch(fetchCoinAction(coins))
        // dispatch(setErrorsAction(errors))
    }, []);

    const addCoinHandler = e => {
        console.log('addCoinHandler')
        Inertia.visit(PATH_ADD_COIN_PAGE)
    };

    return (
        <Layout>
            <div className={s.homePage}>
                <Container>
                    <section className={s.mainSection}>
                        <div className={s.alertWrapper}>
                            <CustomAlert />
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
                            <Medal>
                                <p>Top Daily Winner</p>
                            </Medal>
                        </div>
                        <div className={s.tableBlock}>
                            <SimpleTable />
                            <div className={s.rightSide}>
                                <img className={s.dogWin} src={dogWin} alt="dog"/>
                                <h2>Coin Name</h2>
                                <div className={s.graphWrapper}>
                                    <GraphicIncrease />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={s.topCoinsSection}>
                        <SectionSeparator sectionName={`Tap coins`} />

                        <div className={s.cardWrapper}>
                            <TopCoins
                                title={'coins of the 1h'}
                                data={topCoinsData}
                            />
                            <TopCoins
                                title={'coins of the 24h'}
                                classBg={'pink'}
                                data={topCoinsData}
                            />
                            <TopCoins
                                title={'coins of the week'}
                                classBg={'blue'}
                                data={topCoinsData}
                            />
                        </div>
                    </section>

                    <section className={s.coinsRateSection}>
                        <SectionSeparator sectionName={`Coins rate`} />
                        {/*<div className={s.coinsTableWrapper}>
                            <CoinsRateTable coins={coins} />
                        </div>*/}
                        <div className={s.filterTableWrapper}>
                            <div className={s.filterWrapper}>
                                <TimeFilter />
                                <CategoryFilter/>
                                <Searching />
                            </div>
                            <CoinsRateTable coins={coins} />
                        </div>
                    </section>


                </Container>
                <LeadersSubscribeBlock />
            </div>
        </Layout>
    );
};

export default HomePage;
