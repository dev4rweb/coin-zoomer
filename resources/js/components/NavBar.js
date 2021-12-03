import React from 'react';
import s from '../../sass/components/NavBar/NavBar.module.scss'
import {Container, Nav, Navbar} from "react-bootstrap";
import {InertiaLink} from "@inertiajs/inertia-react";
import {
    PATH_ADC_PAGE, PATH_ADMIN_PAGE,
    PATH_AIR_DROP_PAGE,
    PATH_CONTACTS_PAGE,
    PATH_HOME_PAGE, PATH_LOGIN_PAGE, PATH_LOGOUT, PATH_REGISTER_PAGE, PATH_USER_PAGE,
    PATH_VERIFIED_PAGE
} from "../utils/routesPath";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {setErrorsAction} from "../reducers/errorsReducer";

const NavBar = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser.user)

    const logoutHandler = e => {
        console.log('NavBar currentUser', currentUser)
        axios.post(PATH_LOGOUT)
            .then(res => {
                console.log('logoutHandler res', res)
                if (res.status === 204) {
                    dispatch(setErrorsAction({message: 'You are logout'}))
                    dispatch(setCurrentUserAction(null))
                }
            })
            .catch(err => {
                console.log('logoutHandler err', err)
            });
    };

    return (
        <Navbar
            bg="primary"
            variant="dark"
        >
            <Container>
                <Navbar.Brand href={PATH_HOME_PAGE}>Coin Zoomer</Navbar.Brand>
                <Nav className={`me-auto ${s.navBar}`}>
                    <div className={s.menuWrapper}>
                        <InertiaLink
                            className={'nav-link'}
                            href={PATH_AIR_DROP_PAGE}
                        >
                            AirDrop
                        </InertiaLink>
                        <InertiaLink
                            className={'nav-link'}
                            href={PATH_VERIFIED_PAGE}
                        >
                            Verified
                        </InertiaLink>
                        <InertiaLink
                            className={'nav-link'}
                            href={PATH_ADC_PAGE}
                        >
                            Adc
                        </InertiaLink>
                        <InertiaLink
                            className={'nav-link'}
                            href={PATH_CONTACTS_PAGE}
                        >
                            Contacts
                        </InertiaLink>
                    </div>

                    {
                        currentUser ?
                            <div className={s.authWrapper}>
                                {
                                    currentUser.is_admin ?
                                        <InertiaLink
                                            className={'nav-link'}
                                            href={PATH_ADMIN_PAGE}
                                        >
                                            AdminPanel
                                        </InertiaLink>
                                        :
                                        <InertiaLink
                                            className={'nav-link'}
                                            href={PATH_USER_PAGE}
                                        >
                                            UserPanel
                                        </InertiaLink>
                                }
                                <InertiaLink
                                    className={'nav-link'}
                                    onClick={logoutHandler}
                                    as="button"
                                    type="button"
                                >
                                    Logout
                                </InertiaLink>
                            </div>
                            :
                            <div className={s.authWrapper}>
                                <InertiaLink
                                    className={'nav-link'}
                                    href={PATH_LOGIN_PAGE}
                                >
                                    Login
                                </InertiaLink>
                                <InertiaLink
                                    className={'nav-link'}
                                    href={PATH_REGISTER_PAGE}
                                >
                                    Register
                                </InertiaLink>
                            </div>
                    }


                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
