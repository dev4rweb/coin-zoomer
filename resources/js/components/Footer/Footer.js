import React from 'react';
import s from '../../../sass/components/Footer/Footer.module.scss'
import {Container} from "react-bootstrap";
import FooterNav from "../UI/FooterNav/FooterNav";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <hr className={s.footerBorder}/>
            <div className={s.footerContent}>
                <Container className={s.navWrapper}>
                    <FooterNav />
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
