import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import bg from "../../assets/design/airdrops.png"
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";

const AirDropPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <img src={bg} width="100%" alt="bg"/>
        </Layout>
    );
};

export default AirDropPage;
