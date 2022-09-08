import React from 'react';
import Layout from "../components/Layout";
import s from '../../sass/pages/ErrorPage/ErrorPage.module.scss'
import {Head} from '@inertiajs/inertia-react'

const ErrorPage = () => {
    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <div className={`container d-flex justify-content-center align-items-center ${s.errorPage}`}>
                <h1>404</h1>
            </div>
        </Layout>
    );
};

export default ErrorPage;
