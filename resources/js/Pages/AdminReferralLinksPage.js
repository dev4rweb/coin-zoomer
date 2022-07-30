import React, {useEffect} from 'react';
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {fetchReferralLinksAction} from "../reducers/referralLinksReducer";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {Container} from "react-bootstrap";
import Layout from "../components/Layout";
import ReferralTable from "../components/UI/Tables/ReferralTable/ReferralTable";

const AdminReferralLinksPage = ({currentUser, refLinks}) => {
    const dispatch = useDispatch()
    const referrals = useSelector(state => state.referralLinks.referral_links)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchReferralLinksAction(refLinks))
    }, []);

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar />
                </div>
                <div className="mt-3">
                    {
                        referrals ?
                            <ReferralTable />
                            :
                            <h2>No Referrals links</h2>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default AdminReferralLinksPage;
