import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'

const BonusTableItem = ({data, index}) => {
    return (
        <tr className={s.tableItem}>
            <td>
                <div>
                    <p>{index + 1}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.id}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.coin_id} - {data.coin_name}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.amount}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.paid ? 'Yes' : 'No'}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.wallet_id ?? ' - '}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.owner_name}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.created_at}</p>
                </div>
            </td>
        </tr>
    );
};

export default BonusTableItem;
