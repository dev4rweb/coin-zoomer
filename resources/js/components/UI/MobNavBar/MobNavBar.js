import React, {useState} from 'react';
import s from '../../../../sass/components/UI/MobNavBar/MobNavBar.module.scss'
import {Button, Nav, Offcanvas} from "react-bootstrap";
import {
    PATH_ADC_PAGE, PATH_ADMIN_PAGE,
    PATH_AIR_DROP_PAGE,
    PATH_CONTACTS_PAGE,
    PATH_HOME_PAGE, PATH_LOGIN_PAGE, PATH_LOGOUT, PATH_REGISTER_PAGE, PATH_USER_PAGE,
    PATH_VERIFIED_PAGE
} from "../../../utils/routesPath";
import {InertiaLink} from "@inertiajs/inertia-react";
import {useDispatch, useSelector} from "react-redux";
import {setErrorsAction} from "../../../reducers/errorsReducer";
import {setCurrentUserAction} from "../../../reducers/currentUserReducer";
import {Inertia} from "@inertiajs/inertia";
import OutlineBtn from "../OutlineBtn/OutlineBtn";

const MobNavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser.user)
    const routes = [
        {name: 'AirDrop', url: PATH_AIR_DROP_PAGE},
        {name: 'Verified', url: PATH_VERIFIED_PAGE},
        {name: 'Adc', url: PATH_ADC_PAGE},
        {name: 'Contntacts', url: PATH_CONTACTS_PAGE},
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
        <>
            <div className={s.navBarBtns}>
                <InertiaLink
                    href={PATH_HOME_PAGE}
                    className={`navbar-brand ${s.brand}`}
                >
                    Coin Zoomer
                </InertiaLink>
                <Button
                    className={s.burgerBtn}
                    variant="outline-info"
                    onClick={handleShow}>
                    <span className="glyphicon">&#8801;</span>
                </Button>

            </div>
            <Offcanvas
                show={show}
                onHide={handleClose}
                className={s.offcanvas}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <InertiaLink
                            href={PATH_HOME_PAGE}
                            className={`navbar-brand ${s.brand}`}
                        >
                            Coin Zoomer
                        </InertiaLink>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={`me-auto ${s.navBar}`}>
                        <div className={s.menuWrapper}>
                            {
                                routes.map((item, index) => {
                                    const isActive = window.location.href.includes(item.url);
                                    const activeClass = isActive ? 'active' : ''

                                    return (
                                        <InertiaLink
                                            key={index}
                                            className={`nav-link  ${s.navLink} ${activeClass}`}
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
                                    {
                                        currentUser.is_admin ?
                                            <InertiaLink
                                                className={`nav-link ${s.navLink}`}
                                                href={PATH_ADMIN_PAGE}
                                            >
                                                AdminPanel
                                            </InertiaLink>
                                            :
                                            <InertiaLink
                                                className={`nav-link ${s.navLink}`}
                                                href={PATH_USER_PAGE}
                                            >
                                                UserPanel
                                            </InertiaLink>
                                    }
                                    <InertiaLink
                                        className={`nav-link ${s.navLink}`}
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
                                        className={`nav-link ${s.navLink}`}
                                        href={PATH_LOGIN_PAGE}
                                    >
                                        Login
                                    </InertiaLink>
                                    <InertiaLink
                                        className={`nav-link ${s.navLink}`}
                                        href={PATH_REGISTER_PAGE}
                                    >
                                        Register
                                    </InertiaLink>


                                </div>
                        }


                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobNavBar;