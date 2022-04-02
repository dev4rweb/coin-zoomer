import React, {useEffect} from 'react';
import s from '../../sass/pages/AirDropPage/AirDropPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import {Container} from "react-bootstrap";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import Medal from "../components/Medal/Medal";
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import StatusTable from "../components/UI/Tables/StatusTable/StatusTable";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADD_AIR_DROP_PAGE} from "../utils/routesPath";

const AirDropPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    const addAirDropHandler = e => {
        // console.log('addAirDropHandler')
        Inertia.visit(PATH_ADD_AIR_DROP_PAGE)
    };

    return (
        <Layout>
            <div className={s.airDropPage}>
                <div className={s.airDropMain}>
                    <Container className={s.airDropWrapper}>
                        <CustomAlert />
                        <BannerBlock />
                        <div className={s.medalWrapper}>
                            <Medal>
                                <p className={s.medalText}>Ongoing Airdrops</p>
                            </Medal>
                            <OutlineBtn
                                clickHandler={addAirDropHandler}
                            >
                                Add AirDrop
                            </OutlineBtn>
                        </div>
                        <div className={s.tableWrapper}>
                            <StatusTable />
                        </div>
                    </Container>
                </div>
                <LeadersSubscribeBlock />
            </div>
        </Layout>
    );
};

export default AirDropPage;
