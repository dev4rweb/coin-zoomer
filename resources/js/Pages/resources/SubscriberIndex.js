import React, {useEffect, useState} from 'react';
import s from '../../../sass/pages/AdminPage/AdminPage.module.scss'
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import AdminSidebar from "../../components/UI/AdminSidebar/AdminSidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubscribersAction} from "../../reducers/subscribeReducer";
import AdminSubscriberTable from "../../components/UI/Tables/AdminSubscriberTable/AdminSubscriberTable";
import {setErrorsAction} from "../../reducers/errorsReducer";

const SubscriberIndex = ({subscribers}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.subscribers.subscribers)
    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(fetchSubscribersAction(subscribers))
    });

    const createTextFile = e => {
        e.preventDefault()
        // console.log('createTextFile')
        axios.post('/get-text-file')
            .then(res => {
                console.log('createTextFile', res)
                if (res.data.success) {
                    setShow(true)
                    dispatch(setErrorsAction({message: res.data.message}))
                } else dispatch(setErrorsAction({message: 'Something wrong'}))
            })
            .catch(err => {
                console.log('createTextFile err', err)
                dispatch(setErrorsAction({message: 'Something wrong'}))
            });
    };

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar />
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-end mb-3">
                        {
                            show ?
                                <a
                                    href="/lsapp/public/file.txt"
                                    className="btn btn-info"
                                    onClick={event => setShow(false)}
                                    download
                                >
                                    Download
                                </a>
                                :
                                <button
                                    className="btn btn-success"
                                    onClick={createTextFile}
                                >
                                    Get text file
                                </button>

                        }
                    </div>
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
