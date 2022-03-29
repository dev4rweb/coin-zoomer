import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss";
import {Table} from "react-bootstrap";
import AdminCoinTableItem from "./AdminCoinTableItem";

const AdminCoinTable = ({coins}) => {
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th>№</th>
                <th>ID</th>
                <th>Name</th>
                <th>Is approved</th>
                <th>Is promoted</th>
                <th/>
                <th/>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                coins.map((i, index) =>
                    <AdminCoinTableItem key={i.id} data={i} index={index}/>)
            }
            </tbody>
        </Table>
    );
};

export default AdminCoinTable;
