import React from 'react';
import s from '../../sass/components/Layout.module.scss'
import NavBar from "./NavBar";
import Messages from "./UI/Messages/Messages";
import MobNavBar from "./UI/MobNavBar/MobNavBar";
import Footer from "./Footer/Footer";
import OutlineBtn from "./UI/OutlineBtn/OutlineBtn";

const Layout = ({children}) => {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className={`bg-dark position-relative ${s.layout}`}
        >

            <div className={s.toggleMob}>
                <MobNavBar/>
            </div>
            <div className={s.toggleDesktop}>
                <NavBar/>
            </div>
            <main>
                {children}
            </main>
            <Footer />
            <Messages/>
        </div>
    );
};

export default Layout;
