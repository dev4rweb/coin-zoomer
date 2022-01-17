import React from 'react';
import {Nav} from "react-bootstrap";
import {
    PATH_ADMIN_COINS_PAGE,
    PATH_ADMIN_PAGE,
} from "../../../utils/routesPath";
import {InertiaLink} from "@inertiajs/inertia-react";

const AdminSidebar = () => {
    const routes = [
        {name: 'USERS', url: PATH_ADMIN_PAGE},
        {name: 'COINS', url: PATH_ADMIN_COINS_PAGE},
    ]
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            {
                routes.map((item, index) => {
                    const isActive = window.location.href.includes(item.url);
                    const activeClass = isActive ? 'active' : ''

                    return (
                        <InertiaLink
                            key={index}
                            style={{color: 'white', fontWeight: 'bold'}}
                            className={`nav-link ${activeClass}`}
                            href={item.url}
                        >
                            {item.name}
                        </InertiaLink>
                    )
                })
            }
        </Nav>
    );
};

export default AdminSidebar;