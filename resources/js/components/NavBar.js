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
import {Inertia} from "@inertiajs/inertia";
import AppNavBtn from "./UI/AppNavBtn";
import OutlineBtn from "./UI/OutlineBtn/OutlineBtn";

const NavBar = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser.user)
    const routes = [
        {name: 'AirDrop', url: PATH_AIR_DROP_PAGE},
        {name: 'Verified', url: PATH_VERIFIED_PAGE},
        {name: 'Adc', url: PATH_ADC_PAGE},
        {name: 'Contacts', url: PATH_CONTACTS_PAGE},
    ]

    console.log('NavBar location', window.location.href.includes(PATH_AIR_DROP_PAGE))

    const logoutHandler = e => {
        // console.log('NavBar currentUser', currentUser)
        axios.post(PATH_LOGOUT)
            .then(res => {
                console.log('logoutHandler res', res)
                if (res.status === 204) {
                    dispatch(setErrorsAction({message: 'You are logout'}))
                    dispatch(setCurrentUserAction(null))
                    Inertia.visit(PATH_HOME_PAGE)
                }
            })
            .catch(err => {
                console.log('logoutHandler err', err)
            });
    };

    return (
        <Navbar
            // bg="primary"
            variant="dark"
            style={{height: '60px'}}
            className={s.border}
        >
            <Container className={s.container}>
                <AppNavBtn/>
                <InertiaLink
                    href={PATH_HOME_PAGE}
                    className={'navbar-brand'}
                >
                    Coin Zoomer
                </InertiaLink>
                <Nav className={`me-auto ${s.navBar}`}>
                    <div className={s.menuWrapper}>
                        {
                            routes.map((item, index) => {
                                const isActive = window.location.href.includes(item.url);
                                const activeClass = isActive ? 'active' : ''

                                return (
                                    <InertiaLink
                                        key={index}
                                        className={`nav-link ${activeClass}`}
                                        href={item.url}
                                    >
                                        {item.name}
                                    </InertiaLink>
                                )
                            })
                        }
                    </div>

                    {
                        currentUser ?
                            <div className={s.authWrapper}>
                                <OutlineBtn>Add Coin</OutlineBtn>
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
                                <OutlineBtn>Add Coin</OutlineBtn>
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
