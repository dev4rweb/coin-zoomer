import React from 'react';
import s from '../../sass/components/Layout.module.scss'
import NavBar from "./NavBar";
import Messages from "./UI/Messages/Messages";

const Layout = ({children}) => {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className={`bg-dark position-relative ${s.layout}`}
        >
            <NavBar/>
            <main>
                {children}
            </main>
            <Messages />
        </div>
    );
};

export default Layout;
