import React, {useEffect} from 'react';
import s from '../../sass/pages/AdminPage/AdminPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {fetchReferralLinksAction} from "../reducers/referralLinksReducer";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {Container} from "react-bootstrap";
import Layout from "../components/Layout";
import ReferralTable from "../components/UI/Tables/ReferralTable/ReferralTable";
import {Head} from '@inertiajs/inertia-react'

const AdminReferralLinksPage = ({currentUser, refLinks}) => {
    const dispatch = useDispatch()
    const referrals = useSelector(state => state.referralLinks.referral_links)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchReferralLinksAction(refLinks))
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
