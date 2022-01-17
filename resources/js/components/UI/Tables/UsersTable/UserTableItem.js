import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'


const UserTableItem = ({data, index}) => {
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
                    <p>{data.email}</p>
                </div>
            </td>
        </tr>
    );
};

export default UserTableItem;
