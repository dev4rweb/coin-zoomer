import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import AdminSubscriberTableItem from "./AdminSubscriberTableItem";

const AdminSubscriberTable = () => {
    const items = useSelector(state => state.subscribers.subscribers)

    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th>№</th>
                <th>ID</th>
                <th>Email</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                items.map((i, index) =>
                    <AdminSubscriberTableItem
                        key={i.id} data={i} index={index}
                    />
                )
            }
            </tbody>
        </Table>
    );
};

export default AdminSubscriberTable;
