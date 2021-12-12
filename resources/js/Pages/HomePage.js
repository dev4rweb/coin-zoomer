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

const HomePage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

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
                                <img src={dogWin} alt="dog"/>
                                <h2>Coin Name</h2>
                                <div className={s.graphWrapper}>
                                    <GraphicIncrease />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={s.topCoinsSection}>
                        <SectionSeparator sectionName={`Tap coins`} />
                    </section>
                </Container>
                {/*<img src={bg} width="100%" alt="bg"/>*/}
            </div>
        </Layout>
    );
};

export default HomePage;
