import React from 'react';
import Layout from "../../components/Layout";
import s from "../../../sass/pages/AdminPage/AdminPage.module.scss";
import '../../../sass/pages/CoinShow/CoinShow.scss'
import AdminSidebar from "../../components/UI/AdminSidebar/AdminSidebar";
import AdminCoinTable from "../../components/UI/Tables/AdminCoinTable/AdminCoinTable";
import {Container, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";

const CoinShow = ({coin}) => {
    console.log('CoinShow', coin)

    const goBack = e => {
        Inertia.visit('/admin-coins')
    };

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className="mt-3">
                    <AdminSidebar/>
                </div>
                <div className="mt-3 coin-show-page mb-5">
                    <button
                        className="btn btn-lg btnBack"
                        onClick={goBack}
                    >
                        &#8592;
                    </button>
                    <h1>{coin.name}</h1>
                    <h2 className="d-flex justify-content-around">
                        <span>Price - {coin.price}$</span>
                        <span>Launch date - {coin.launch_date}</span>
                    </h2>
                    <h3>
                        Market Cap - {coin.market_cap}
                    </h3>
                    {
                        coin.coin_gecko_link ?
                            <h4>Coingecko link - <a href={coin.coin_gecko_link}>{coin.coin_gecko_link}</a></h4> : ''
                    }
                    <div
                        className="d-flex justify-content-between align-items-center text-white"
                    >
                        <span>{coin.symbol}</span>
                        <img className="logo" src={coin.logotype} alt="logo"/>
                        <span>Votes - <b>{coin.votes.length}</b></span>
                    </div>
                    <p className="mt-3">{coin.description}</p>
                    {
                        coin.coin_chains && coin.coin_chains.length
                            ?
                            <Table responsive striped bordered variant="dark" size="lg">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Chain</th>
                                    <th>Contract addresses</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    coin.coin_chains.map((chain, index) =>
                                        <tr key={chain.id}>
                                            <td>{index + 1}</td>
                                            <td className="text-center">{chain.chain}</td>
                                            <td className="text-center">{chain.contract_address}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            :
                            <h3>No Contract addresses</h3>
                    }
                    <h2 className="mt-5">Coin social media</h2>
                    <ListGroup className="mt-3 mb-5">
                        {coin.contractTelegram ? <ListGroupItem>Telegram - {coin.contractTelegram}</ListGroupItem> : ''}
                        {coin.contractTwitter ? <ListGroupItem>Twitter - {coin.contractTwitter}</ListGroupItem> : ''}
                        {coin.contractReddit ? <ListGroupItem>Reddit - {coin.contractReddit}</ListGroupItem> : ''}
                        {coin.contractWeb ? <ListGroupItem>Web Address - {coin.contractWeb}</ListGroupItem> : ''}
                        {coin.contractDiscord ? <ListGroupItem>Discord - {coin.contractDiscord}</ListGroupItem> : ''}
                    </ListGroup>
                    <h2 className="mt-5">Contact info</h2>
                    {coin.email && <h3>Contact Email - {coin.email}</h3>}
                    {coin.telegram && <h3>Contact Telegram - {coin.telegram}</h3>}
                </div>
            </Container>
        </Layout>
    );
};

export default CoinShow;
