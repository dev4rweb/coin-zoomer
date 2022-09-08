import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import {Container} from "react-bootstrap";
import {fetchAllUsersAction} from "../reducers/allUsersReducer";
import UsersTable from "../components/UI/Tables/UsersTable/UsersTable";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {Head} from '@inertiajs/inertia-react'

const AdminPage = ({currentUser, users, errors}) => {
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.allUsers.users)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchAllUsersAction(users))
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
                    <AdminSidebar />
                </div>
                <div className="mt-3">
                    {
                        allUsers ?
                            <UsersTable/>
                            :
                            <h2>No users</h2>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default AdminPage;
