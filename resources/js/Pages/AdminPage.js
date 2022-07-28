import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import {Container} from "react-bootstrap";
import {fetchAllUsersAction} from "../reducers/allUsersReducer";
import UsersTable from "../components/UI/Tables/UsersTable/UsersTable";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";

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
