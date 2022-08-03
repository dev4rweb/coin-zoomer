import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss";
import BonusTableItem from "./BonusTableItem";
import {usePage} from "@inertiajs/inertia-react";
import {Table} from "react-bootstrap";

const BonusTable = () => {
    const {bonuses} = usePage().props
    console.log('Bonus Table', bonuses)
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th>№</th>
                <th>ID</th>
                <th>Coin</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Wallet</th>
                <th>Owner</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
                bonuses.map((i, index) =>
                    <BonusTableItem key={i.id} data={i} index={index} />)
            }
            </tbody>
        </Table>
    );
};

export default BonusTable;
