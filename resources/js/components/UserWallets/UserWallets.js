import React from 'react';
import {usePage} from "@inertiajs/inertia-react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setLoadingAction} from "../../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";

const UserWallets = () => {
    const {wallets} = usePage().props
    const dispatch = useDispatch()
    console.log('UserWallets', wallets)

    const removeHandler = (e, item) => {
        e.preventDefault()
        console.log('removeHandler', item)
        dispatch(setLoadingAction(true))
        axios.post(`/wallets/${item.id}`, {
            _method: 'DELETE'
        }).then(res => {
            console.log('removeHandler', res)
            if (res.data.success) Inertia.reload()
        }).catch(err => {
            console.log('removeHandler err', err)
        }).finally(()=> dispatch(setLoadingAction(false)));
    };

    if (wallets.length) {
        return (
            <ul className="list-unstyled mb-5" style={{maxWidth: '480px'}}>
                {
                    wallets.map((i, index) =>
                        <li
                            key={i.id}
                            className="d-flex justify-content-between mb-3 w-100 p-1"
                            style={{border: '2px solid #0dcaf0', borderRadius: '4px'}}
                        >
                            <div
                                className="me-2 p-1"
                            >
                                <h2 className="mb-0">{index + 1}. {i.card_number}</h2>
                                {
                                    i.description &&
                                    <h3 className="mb-0 mt-1">{i.description}</h3>
                                }
                            </div>
                            {
                                i.is_use ?
                                    <Button
                                        variant="outline-info"
                                        disabled={true}
                                    >
                                        Used
                                    </Button>
                                    :
                                    <Button
                                        variant="outline-danger"
                                        onClick={e => removeHandler(e, i)}
                                    >
                                        &times;
                                    </Button>
                            }
                        </li>
                    )
                }
            </ul>
        );
    }
    return (
        <div>
            <h2>Wallets not found</h2>
        </div>
    );
};

export default UserWallets;
