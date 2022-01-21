import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Container} from "react-bootstrap";
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import AdminCoinTable from "../components/UI/Tables/AdminCoinTable/AdminCoinTable";
import Layout from "../components/Layout";

const AdminBannerPage = ({currentUser, errors}) => {
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
                    <h1>Banner Page</h1>
                    <h2>What fields should be in this table/page?</h2>
                </div>
            </Container>
        </Layout>
    );
};

export default AdminBannerPage;
