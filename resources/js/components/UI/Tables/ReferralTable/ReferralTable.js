import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import ReferralTableItem from "./ReferralTableItem";

const ReferralTable = () => {
    const referrals = useSelector(state => state.referralLinks.referral_links)
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th>№</th>
                <th>ID</th>
                <th>Username</th>
                <th>Link</th>
                <th>Added Coin</th>
            </tr>
            </thead>
            <tbody>
            {
                referrals.map((i, index) =>
                <ReferralTableItem key={i.id} data={i} index={index} />)
            }
            </tbody>
        </Table>
    );
};

export default ReferralTable;
