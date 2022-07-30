import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import {Button, CloseButton} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../../../../reducers/errorsReducer";
import {PATH_ADMIN_COINS_PAGE} from "../../../../utils/routesPath";
import {removeCoin} from "../../../../asyncAction/coinInner";

const AdminCoinTableItem = ({data, index}) => {
    const dispatch = useDispatch()

    const coinRowHandler = e => {
        // console.log('coinRowHandler', e.target.tagName)
        if (e.target.tagName !== "BUTTON") {
            console.log('coinRowHandler', data)
            Inertia.visit(`/innerCoins/${data.id}`)
        }
    };

    const coinEditHandler = e => {
        console.log('coinEditHandler', data)
        Inertia.visit(`/innerCoins/${data.id}/edit`)
    };

    const approveHandler = e => {
        console.log('approveHandler', data)
        if (data.is_approved) dispatch(setErrorsAction({message: 'Already APPROVED'}))
        else changeApproveApi(true)
    };

    const rejectHandler = e => {
        console.log('rejectHandler', data)
        if (data.is_approved) changeApproveApi(false)
        else dispatch(setErrorsAction({message: 'Already REJECTED!'}))
    };

    const changeApproveApi = isApproved => {
        axios.post(`/api/coins/${data.id}`, {
            _method: 'PATCH',
            is_approved: isApproved
        }).then(res => {
            console.log('changeApproveApi', res)
            dispatch(setErrorsAction({message: res.data.message}));
            Inertia.visit(PATH_ADMIN_COINS_PAGE);
        }).catch(err => {
            console.log(err)
            // setErrorsAction({message: 'Something wrong!'});
            dispatch(setErrorsAction(err.response.data));
        });
    };

    const removeCoinHandler = () => {
        console.log('removeCoinHandler', data)
        dispatch(removeCoin(data.id))
    };

    return (
        <tr
            className={s.tableItem}
            onClick={coinRowHandler}
        >
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
                    {data.invite_link && <span style={{color: '#f14b4e', fontWeight: 'bold', fontSize: '30px'}}> *</span>}
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
                    <Button
                        variant="outline-info"
                        onClick={coinEditHandler}
                    >
                        Edit
                    </Button>
                </div>
            </td>
            <td>
                <div>
                    <Button
                        variant="outline-success"
                        onClick={approveHandler}
                    >
                        Approve
                    </Button>
                </div>
            </td>
            <td>
                <div>
                    <Button
                        variant="outline-danger"
                        onClick={rejectHandler}
                    >
                        Reject
                    </Button>
                </div>
            </td>
            <td>
                <div>
                    <Button
                        variant={"outline-danger"}
                        onClick={removeCoinHandler}
                    >
                        &times;
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminCoinTableItem;
