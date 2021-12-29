import React, {useEffect} from 'react';
import s from '../../sass/pages/AirDropOpenPage/AirDropOpenPage.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import Layout from "../components/Layout";
import {Container} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";

const AirDropOpenPage = ({currentUser, errors, pageId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        console.log('AirDropOpenPage pageId', pageId)
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.airDropOpenPage}>
                <Container className={s.wrapper}>
                    <CustomAlert />
                    <BannerBlock />
                    <div>
                        <h1>AirDropOpenPage - {pageId}</h1>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default AirDropOpenPage;
