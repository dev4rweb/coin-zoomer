import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setLoadingAction} from "../../../../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";

const BonusTableItem = ({data, index}) => {
    const dispatch = useDispatch()

    const payHandler = (e, wallet) => {
        e.preventDefault()
        console.log('payHandler', wallet)
        dispatch(setLoadingAction(true))
        axios.post(`/bonuses/${data.id}`, {
            _method: 'PATCH',
            wallet_id: wallet.id,
            paid: true
        }).then(res => {
            console.log('payHandler', res)
            if (res.data.success) Inertia.reload()
        }).catch(err => {
            console.log('payHandler err', err)
        }).finally(()=>dispatch(setLoadingAction(false)));
    };

    return (
        <tr className={s.tableItem} style={{cursor: 'auto'}}>
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
                <ul className="list-unstyled">
                    {/*<p>{data.wallet_id ?? ' - '}</p>*/}
                    {
                        data.user_wallets && data.user_wallets.length ?
                            data.user_wallets.map((i) =>
                                <li
                                    key={i.id}
                                    title={i.description ?? ''}
                                    className="mb-1"
                                >
                                    <Button
                                        variant="info"
                                        onClick={e => payHandler(e, i)}
                                        className={`fill-btn`}
                                        disabled={data.paid === true}
                                    >
                                        {i.card_number} <b>Pay</b>
                                    </Button>
                                </li>
                            )
                            :
                            <p> - </p>
                    }
                </ul>
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
