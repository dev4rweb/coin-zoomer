import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'

const ReferralTableItem = ({data, index}) => {
    return (
        <tr className={s.tableItem}>
            <td>
                <div><p>{index}</p></div>
            </td>
            <td>
                <div><p>{data.id}</p></div>
            </td>
            <td>
                <div><p>{data.inviter.name}</p></div>
            </td>
            <td>
                <div><p>{data.ref_link}</p></div>
            </td>
            <td>
                <div><p>{
                    data.added_coin.length ?
                        data.added_coin.map((i, index) =>
                            <p key={i.id}>{i.name}</p>)
                        :
                        ' - '
                }</p></div>
            </td>
        </tr>
    );
};

export default ReferralTableItem;
