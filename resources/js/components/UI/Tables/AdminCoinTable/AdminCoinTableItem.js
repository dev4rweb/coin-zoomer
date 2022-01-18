import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import {Button} from "react-bootstrap";

const AdminCoinTableItem = ({data, index}) => {
    return (
        <tr className={s.tableItem}>
            <td>
                <div>
                    <p>{index}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.id}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.name}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.is_approved}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.is_promoted}</p>
                </div>
            </td>
            <td>
                <div>
                    <Button variant="outline-info">Edit</Button>
                </div>
            </td>
            <td>
                <div>
                    <Button variant="outline-success">Approve</Button>
                </div>
            </td>
            <td>
                <div>
                    <Button variant="outline-danger">Reject</Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminCoinTableItem;
