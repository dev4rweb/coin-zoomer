import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import {Button} from "react-bootstrap";
import {deleteSubscriberApi} from "../../../../asyncAction/subscriberApi";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADMIN_SUBSCRIBERS_PAGE} from "../../../../utils/routesPath";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../../../../reducers/errorsReducer";

const AdminSubscriberTableItem = ({index, data}) => {
    const dispatch = useDispatch()

    const removeHandler = e => {
        console.log('removeHandler', data)
        deleteSubscriberApi(data.id)
            .then(res => {
                console.log('deleteSubscriberApi', res)
                if (res.data.success) {
                    dispatch(setErrorsAction({message: res.data.message}))
                    Inertia.visit(PATH_ADMIN_SUBSCRIBERS_PAGE)
                }
            });
    };

    return (
        <tr
            className={s.tableItem}
        >
            <td>
                <div>
                    {index + 1}
                </div>
            </td>
            <td>
                <div>
                    {data.id}
                </div>
            </td>
            <td>
                <div>
                    {data.email}
                </div>
            </td>
            <td>
                <div>
                    <Button
                        variant={"outline-danger"}
                        onClick={removeHandler}
                    >
                        &times;
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default AdminSubscriberTableItem;
