import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'
import {Button} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setErrorsAction, setLoadingAction} from "../../../../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADMIN_PAGE} from "../../../../utils/routesPath";


const UserTableItem = ({data, index}) => {
    const dispatch = useDispatch();

    const removeUserHandler = e => {
        e.preventDefault()
        console.log('removeUserHandler', data)
        dispatch(setLoadingAction(true))
        axios.post(`/userModels/${data.id}`, {
            _method: 'DELETE',
        }).then(res => {
            console.log('removeUserHandler res', res)
            if (res.data.success) dispatch(setErrorsAction({message: res.data.message}))
        }).catch(err => {
            console.log('removeUserHandler err', err)
            dispatch(setErrorsAction(err.response.data));
        }).finally(() => {
            dispatch(setLoadingAction(false))
            Inertia.visit(PATH_ADMIN_PAGE);
        });
    };

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
            <td>
                <div>
                    <Button
                        variant={"outline-danger"}
                        onClick={removeUserHandler}
                    >
                        &times;
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableItem;
