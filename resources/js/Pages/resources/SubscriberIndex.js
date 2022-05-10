import React, {useEffect} from 'react';
import s from '../../../sass/pages/AdminPage/AdminPage.module.scss'
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import AdminSidebar from "../../components/UI/AdminSidebar/AdminSidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubscribersAction} from "../../reducers/subscribeReducer";
import AdminSubscriberTable from "../../components/UI/Tables/AdminSubscriberTable/AdminSubscriberTable";

const SubscriberIndex = ({subscribers}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.subscribers.subscribers)

    useEffect(() => {
        dispatch(fetchSubscribersAction(subscribers))
    });

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className="mt-3">
                    <AdminSidebar />
                </div>
                <div className="mt-3">
                    {
                        items && items.length > 0 ?
                            <AdminSubscriberTable /> :
                            <h1>No one subscribers</h1>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default SubscriberIndex;
