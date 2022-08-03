import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction, setLoadingAction} from "../reducers/errorsReducer";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import {fetchReferralLinksAction} from "../reducers/referralLinksReducer";
import {destroyReferralLinkApi, storeReferralLinkApi} from "../asyncAction/referralLinksApi";
import {Inertia} from "@inertiajs/inertia";

const UserPage = ({currentUser, refLinks, errors}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser.user)
    const links = useSelector(state => state.referralLinks.referral_links)

    console.log('UserPage links', links)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchReferralLinksAction(refLinks))
    }, []);

    const generateRefLinkHandler = e => {
        e.preventDefault()
        console.log('generateRefLinkHandler', user.id)
        if (user && user.id) {
            dispatch(setLoadingAction(true))
            storeReferralLinkApi(user.id)
                .then(res => {
                    if (res.data.success) {
                        dispatch(fetchReferralLinksAction(res.data.models))
                        dispatch(setErrorsAction({message: 'Link generated'}))
                    }
                })
                .catch(err => {
                    dispatch(setErrorsAction({message: err.response.message}))
                })
                .finally(() => {
                    dispatch(setLoadingAction(false))
                });
        } else dispatch(setErrorsAction({message: 'User not found'}))
    };

    const copyRefLinkHandler = (e, url) => {
        e.preventDefault()
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            dispatch(setErrorsAction({message: 'Copied!'}))
            return navigator.clipboard.writeText(url)
        }
        return Promise.reject('The Clipboard API is not available. http://127.0.0.1:8000/user-panel');
    };

    const removeLinkHandler = (e, linkId) => {
        e.preventDefault()
        console.log('removeLinkHandler', linkId)
        destroyReferralLinkApi(linkId)
            .then(res => {
                if (res.data.success) {
                    dispatch(fetchReferralLinksAction(res.data.models))
                    dispatch(setErrorsAction({message: 'Link removed'}))
                }
            })
            .catch(err => {
                dispatch(setErrorsAction({message: err.response.message}))
            })
            .finally(() => {
                dispatch(setLoadingAction(false))
            });
    };

    return (
        <Layout>
            <Container>
                <h1>User Panel</h1>
                {
                    user &&
                    <div className="mb-3">
                        <h2>ID: {user.id}</h2>
                        <h3>Name: {user.name}</h3>
                        <h4>Email: {user.email}</h4>
                    </div>
                }
                <div>
                    <Button
                        variant="outline-info mb-3"
                        onClick={generateRefLinkHandler}
                    >
                        Generate Link
                    </Button>
                </div>
                {
                    links.length && links.map(link =>
                        <div key={link.id}>
                            <InputGroup
                                className="mb-3"
                                style={{maxWidth: '600px'}}
                            >
                                <FormControl
                                    value={link.ref_link}
                                    className="input-text"
                                    style={{background: '#1d2147', border: '1px solid #2b2f56', color: '#a6b2c6'}}
                                    type="text"
                                    disabled
                                />
                                <Button
                                    variant="outline-info"
                                    onClick={e => copyRefLinkHandler(e, link.ref_link)}
                                >
                                    Copy Link
                                </Button>

                                {
                                    link.added_coin && link.added_coin.length === 0 &&
                                    <Button
                                        variant="outline-danger"
                                        onClick={e => removeLinkHandler(e, link.id)}
                                    >
                                        &times;
                                    </Button>
                                }

                            </InputGroup>
                            {
                                link.added_coin && link.added_coin.length > 0 &&
                                link.added_coin.map((i, index) =>
                                <div key={i.id}>
                                    <h3>
                                        {index + 1}. Coin - {i.name} -
                                        ( {i.is_approved ? 'Approved' : 'Not Approved'} )
                                    </h3>
                                    {
                                        i.bonus &&
                                            <div className="ms-3">
                                                <h4>Bonuses - {i.bonus.amount}</h4>
                                                <p>{i.bonus.paid ? 'Paid' : 'Not Paid'}</p>
                                            </div>
                                    }
                                </div>
                                )
                            }
                        </div>
                    )
                }

            </Container>
        </Layout>
    );
};

export default UserPage;
