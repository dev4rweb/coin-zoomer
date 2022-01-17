import React from 'react';
import Layout from "../components/Layout";
import s from '../../sass/pages/ErrorPage/ErrorPage.module.scss'

const ErrorPage = () => {
    return (
        <Layout>
            <div className={`container d-flex justify-content-center align-items-center ${s.errorPage}`}>
                <h1>404</h1>
            </div>
        </Layout>
    );
};

export default ErrorPage;
