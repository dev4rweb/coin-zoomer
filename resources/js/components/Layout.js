import React from 'react';
import s from '../../sass/components/Layout.module.scss'
import NavBar from "./NavBar";
import Messages from "./UI/Messages/Messages";
import MobNavBar from "./UI/MobNavBar/MobNavBar";
import Footer from "./Footer/Footer";
import OutlineBtn from "./UI/OutlineBtn/OutlineBtn";
import Loader from "./UI/Loader/Loader";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const isLoading = useSelector(state => state.errors.loading)
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
            <div className={s.toggleFooter}>
                <Footer />
            </div>
            <Messages/>
            {
                isLoading && <Loader/>
            }
        </div>
    );
};

export default Layout;
