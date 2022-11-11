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
import {PATH_ADD_COIN_PAGE} from "../utils/routesPath";
import Medal from "../components/Medal/Medal";
import SimpleTableMod from "../components/UI/Tables/SimpleTable/SimpleTableMod";
import {setErrorsAction} from "../reducers/errorsReducer";

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
                                topCoinsDay.length &&
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
                        </div>
                    </section>

                </Container>
            </LazyBackground>
        </Layout>
    );
};

export default HomePageMod;
