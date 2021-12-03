import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import bg from "../../assets/design/index.png"
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";

const VerifiedPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <img src={bg} width="100%" alt="bg"/>
        </Layout>
    );
};

export default VerifiedPage;
