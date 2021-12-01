import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {InertiaLink} from "@inertiajs/inertia-react";
import {
    PATH_ADC_PAGE,
    PATH_AIR_DROP_PAGE,
    PATH_CONTACTS_PAGE,
    PATH_HOME_PAGE, PATH_LOGIN_PAGE, PATH_LOGOUT, PATH_REGISTER_PAGE,
    PATH_VERIFIED_PAGE
} from "../utils/routesPath";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href={PATH_HOME_PAGE}>Coin Zoomer</Navbar.Brand>
                <Nav className="me-auto">
                    <InertiaLink className={'nav-link'} href={PATH_AIR_DROP_PAGE}>AirDrop</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_VERIFIED_PAGE}>Verified</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_ADC_PAGE}>Adc</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_CONTACTS_PAGE}>Contacts</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_LOGIN_PAGE}>Login</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_REGISTER_PAGE}>Register</InertiaLink>
                    <InertiaLink className={'nav-link'} href={PATH_LOGOUT}>Logout</InertiaLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
