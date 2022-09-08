import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import CustomForm from "../components/CustomForm/CustomForm";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADMIN_HOT_NOTIFICATION_PAGE} from "../utils/routesPath";
import {Head} from '@inertiajs/inertia-react'

const AdminHotNotificationPage = ({currentUser, hotNotifications, errors}) => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState({
        id: hotNotifications[0].id,
        is_show: hotNotifications[0].is_show,
        which_page: hotNotifications[0].which_page,
        title: hotNotifications[0].title,
        label: hotNotifications[0].label,
        text: hotNotifications[0].text,
    })

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
    }, []);

    const handleEdit = e => {
        e.preventDefault()
        console.log('handleEdit', alert)
        axios.post(`/api/hot_notifications/${alert.id}`, {
            _method: 'PATCH', ...alert
        }).then(res => {
            console.log('handleEdit res', res)
            if (res.data.success)
                dispatch(setErrorsAction({message: res.data.message}))
        }).catch(err => {
            console.log('handleEdit err', err)
            dispatch(setErrorsAction({message: "Something wrong"}))
        }).finally(() => Inertia.visit(PATH_ADMIN_HOT_NOTIFICATION_PAGE));
    };

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar/>
                </div>
                <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-start">
                        <h1>Hot Notification Page</h1>
                    </div>
                    <CustomForm
                        title={
                            <h2>Edit Notification</h2>
                        }
                    >
                        <form
                            onSubmit={handleEdit}
                        >
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type='checkbox'
                                    checked={alert.is_show}
                                    onChange={e => setAlert({
                                        ...alert,
                                        ['is_show']: e.target.checked
                                    })}
                                    label={alert.is_show ? 'SHOW ON WEBSITE' : 'NOT SHOWED'}
                                />
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <label className="input-label">
                                    Title
                                    <FormControl
                                        className="input-text"
                                        type="text"
                                        value={alert.title}
                                        onChange={e => setAlert({
                                            ...alert,
                                            ['title']: e.target.value
                                        })}
                                        required
                                    />
                                </label>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <label className="input-label">
                                    Label
                                    <FormControl
                                        className="input-text"
                                        type="text"
                                        value={alert.label}
                                        onChange={e => setAlert({
                                            ...alert,
                                            ['label']: e.target.value
                                        })}
                                        required
                                    />
                                </label>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <label className="input-label">
                                    Text
                                    <FormControl
                                        className="input-text"
                                        type="text"
                                        value={alert.text}
                                        onChange={e => setAlert({
                                            ...alert,
                                            ['text']: e.target.value
                                        })}
                                        required
                                    />
                                </label>
                            </InputGroup>
                            <div className="mt-3 d-flex justify-content-end">
                                <Button
                                    type="submit"
                                    variant="success"
                                >
                                    Update
                                </Button>
                            </div>
                        </form>
                    </CustomForm>
                </div>
            </Container>
        </Layout>
    );
};

export default AdminHotNotificationPage;
