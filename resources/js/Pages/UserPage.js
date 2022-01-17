import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Container} from "react-bootstrap";

const UserPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser.user)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <Container>
                <h1>User Panel</h1>
                {
                    user &&
                        <div>
                            <h2>ID: {user.id}</h2>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4>
                        </div>
                }
            </Container>
        </Layout>
    );
};

export default UserPage;
