import React, {useEffect} from 'react';
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import Layout from "../components/Layout";
import {Container} from "react-bootstrap";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {fetchAllUsersAction} from "../reducers/allUsersReducer";
import AdminCoinTable from "../components/UI/Tables/AdminCoinTable/AdminCoinTable";

const AdminCoinsPage = ({currentUser, coins, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className="mt-3">
                    <AdminSidebar/>
                </div>
                <div className="mt-3">
                    {
                        coins && coins.length > 0 ?
                            <AdminCoinTable coins={coins} />:
                            <h1>No one coins</h1>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default AdminCoinsPage;
