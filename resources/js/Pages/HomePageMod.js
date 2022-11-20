import React, {useEffect} from 'react';
import s from '../../sass/pages/HomePage/HomePage.module.scss'
import Layout from "../components/Layout";
import {Head, usePage} from "@inertiajs/inertia-react";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import LazyBackground from "../components/LazyBackground";
import {Button, Container} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADD_COIN_PAGE, PATH_COIN_OPEN_PAGE} from "../utils/routesPath";
import Medal from "../components/Medal/Medal";
import SimpleTableMod from "../components/UI/Tables/SimpleTable/SimpleTableMod";
import {setErrorsAction} from "../reducers/errorsReducer";
import dogWin from "../../assets/img/win-dog.png";
import GraphicIncrease from "../components/UI/GraphicIncrease/GraphicIncrease";
import SectionSeparator from "../components/UI/SectionSeparator/SectionSeparator";
import TopCoins from "../components/TopCoins/TopCoins";
import CoinsRateTableMod from "../components/UI/Tables/CoinsRateTable/CoinsRateTableMod";
import PaginateMod from "../components/UI/Pagination/PaginateMod";

const HomePageMod = ({coins, promotedCoins, topCoinsWeek, topCoinsDay, topCoinsHour, errors}) => {
    const dispatch = useDispatch()
    const {auth} = usePage().props
    console.log('HomePageMod errors', errors)
    console.log('HomePageMod coins', coins)
    // console.log('HomePageMod promotedCoins', promotedCoins)
    console.log('HomePageMod auth', auth)
    console.log('HomePageMod topCoinsHour', topCoinsHour)
    console.log('HomePageMod topCoinsDay', topCoinsDay)
    console.log('HomePageMod topCoinsWeek', topCoinsWeek)

    useEffect(() => {
        dispatch(setCurrentUserAction(auth.user))
    }, [auth.user]);

    useEffect(() => {
        dispatch(setErrorsAction({message: errors.error}))
    }, [errors]);

    const addCoinHandler = e => {
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
                // src='/img-polygonal'
                placeholder='/images/polygonal-blue-abstract.png'
            >
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
                                topCoinsDay.data.length &&
                                <Medal isRight={true}>
                                    <p>Top Daily Winner</p>
                                </Medal>
                            }

                        </div>

                        <div className={s.tableBlock}>
                            {
                                promotedCoins && promotedCoins.data.length &&
                                <SimpleTableMod coins={promotedCoins}/>
                            }

                            {
                                topCoinsDay.data.length &&
                                <div className={s.rightSide}>
                                    <div className={s.winWrapper}>
                                        <img className={s.dogWin} src={dogWin} alt="dog"/>
                                        <img
                                            className={s.coinLogo}
                                            src={topCoinsDay.data[0].logotype}
                                            onClick={event => Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${topCoinsDay.data[0].name.replaceAll(' ', '_')}`)}
                                            alt="logo"
                                        />
                                    </div>

                                    <div className={s.dataWrapper}>
                                        <h2>{topCoinsDay.data[0].name}</h2>
                                        <div className={s.graphWrapper}>
                                            {/*<GraphicIncrease text={bestCoin.one_hour.toFixed(7) || '0'}/>*/}
                                            {
                                                topCoinsDay.data[0].one_hour ?
                                                    <GraphicIncrease text={topCoinsDay.data[0].one_hour_formatted}/> :
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
                                topCoinsHour &&
                                    <TopCoins
                                        title={'coins of the 1h'}
                                        data={topCoinsHour.data.sort((a, b) => b.hour_votes - a.hour_votes)}
                                    />
                            }
                            {
                                topCoinsDay &&
                                <TopCoins
                                    title={'coins of the 24h'}
                                    classBg={'pink'}
                                    data={topCoinsDay.data.sort((a, b) => b.today_votes - a.today_votes)}
                                />
                            }
                            {
                                topCoinsWeek &&
                                <TopCoins
                                    title={'coins of the week'}
                                    classBg={'blue'}
                                    data={topCoinsWeek.data.sort((a, b) => b.week_votes - a.week_votes)}
                                />
                            }
                        </div>
                    </section>

                    <section className={s.coinsRateSection}>
                        <SectionSeparator sectionName={`Coins rate`}/>
                        <div className={s.filterTableWrapper}>
                            <div className={s.filterWrapper}>
                                filters
                            </div>
                            <CoinsRateTableMod coins={coins.data} />
                            <div className='d-flex justify-content-center mt-3'>
                                <PaginateMod links={coins.meta.links} currentPage={coins.meta.current_page} />
                            </div>
                        </div>
                    </section>
                </Container>
            </LazyBackground>
        </Layout>
    );
};

export default HomePageMod;
