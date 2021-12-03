import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import bg from "../../assets/design/index.png";

const AdminPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <h1>Admin Panel</h1>
        </Layout>
    );
};

export default AdminPage;
