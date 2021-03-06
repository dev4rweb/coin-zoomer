import React from 'react';
import {Container, Nav} from "react-bootstrap";
import s from "../../../../sass/components/UI/FooterNav/FooterNav.module.scss";
import {InertiaLink} from "@inertiajs/inertia-react";
import {
    PATH_ADC_PAGE,
    PATH_AIR_DROP_PAGE,
    PATH_CONTACTS_PAGE,
    PATH_HOME_PAGE, PATH_TOKEN_PAGE,
    PATH_VERIFIED_PAGE
} from "../../../utils/routesPath";
import SocialBlock from "../../SocialBlock";
import logo from '../../../../assets/img/logo.png'

const FooterNav = () => {
    const routes = [
        // {name: 'AirDrop', url: PATH_AIR_DROP_PAGE},
        {name: 'KYC', url: PATH_VERIFIED_PAGE},
        {name: 'PROMOTION', url: PATH_ADC_PAGE},
        {name: 'CONTACT US', url: PATH_CONTACTS_PAGE},
        // {name: 'Token', url: PATH_TOKEN_PAGE},
    ]
    return (
        <div className={s.footerNav}>
            <InertiaLink
                href={PATH_HOME_PAGE}
                className={'navbar-brand'}
            >
                <img src={logo} alt="logo" width="200px"/>
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
            </Nav>
            <SocialBlock />
        </div>

    );
};

export default FooterNav;
