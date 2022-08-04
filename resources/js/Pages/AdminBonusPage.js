import React, {useEffect} from 'react';
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import Layout from "../components/Layout";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {Container} from "react-bootstrap";
import BonusTable from "../components/UI/Tables/BonusTable/BonusTable";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";

const AdminBonusPage = ({currentUser, bonuses}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    console.log('AdminBonusPage', bonuses)
    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar/>
                </div>
                <div className="mt-3">
                    {
                        bonuses && bonuses.length ?
                            <BonusTable/>
                            :
                            <h2>No bonuses</h2>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default AdminBonusPage;
