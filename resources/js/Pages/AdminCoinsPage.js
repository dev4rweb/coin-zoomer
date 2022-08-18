import React, {useEffect} from 'react';
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import Layout from "../components/Layout";
import {Container} from "react-bootstrap";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {fetchAllUsersAction} from "../reducers/allUsersReducer";
import AdminCoinTable from "../components/UI/Tables/AdminCoinTable/AdminCoinTable";
import {setErrorsAction, setLoadingAction} from "../reducers/errorsReducer";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";

const AdminCoinsPage = ({currentUser, coins, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    const sitemapHandler = e => {
        e.preventDefault();
        console.log('sitemapHandler')
        dispatch(setLoadingAction(true))
        axios.get('/generate-sitemap')
            .then(res => {
                console.log('sitemapHandler', res)
                if (res.data.success) {
                    dispatch(setErrorsAction({message: res.data.message}))
                    Inertia.reload()
                } else dispatch(setErrorsAction({message: res.data.message}));
            })
            .catch(err => {
                console.log('sitemapHandler err', err)
                dispatch(setErrorsAction(err.response.data))
            })
            .finally(()=> dispatch(setLoadingAction(false)));
    };

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar/>
                </div>
                <div className="mt-3">
                    <button
                        className="btn btn-info mb-3"
                        onClick={sitemapHandler}
                    >
                        Generate sitemap
                    </button>
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
