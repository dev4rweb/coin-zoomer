import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Container} from "react-bootstrap";
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import AdminCoinTable from "../components/UI/Tables/AdminCoinTable/AdminCoinTable";
import Layout from "../components/Layout";
import {Head} from '@inertiajs/inertia-react'

const AdminAirDropPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar/>
                </div>
                <div className="mt-3">
                    <h1>Aird Drop Page</h1>
                    <h2>What fields should be in this table/page?</h2>
                </div>
            </Container>
        </Layout>
    );
};

export default AdminAirDropPage;
