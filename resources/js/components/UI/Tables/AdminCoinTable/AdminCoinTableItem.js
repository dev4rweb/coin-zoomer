import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import {Button} from "react-bootstrap";

const AdminCoinTableItem = ({data, index}) => {
    return (
        <tr className={s.tableItem}>
            <td>
                <div>
                    {index}
                </div>
            </td>
            <td>
                <div>
                    {data.id}
                </div>
            </td>
            <td>
                <div>
                    {data.name}
                </div>
            </td>
            <td>
                <div>
                    {
                        data.is_approved ?
                            <span style={{color: 'green'}}>yes</span>
                            :
                            <span style={{color: 'red'}}>no</span>
                    }
                </div>
            </td>
            <td>
                <div>
                    {
                        data.is_promoted ?
                            <span style={{color: 'green'}}>yes</span>
                            :
                            <span style={{color: 'red'}}>no</span>
                    }
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
