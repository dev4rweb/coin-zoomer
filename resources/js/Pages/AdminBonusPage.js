import React from 'react';
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import Layout from "../components/Layout";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {Container} from "react-bootstrap";
import BonusTable from "../components/UI/Tables/BonusTable/BonusTable";

const AdminBonusPage = ({bonuses}) => {

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
