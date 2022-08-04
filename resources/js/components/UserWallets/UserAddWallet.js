import React, {useState} from 'react';
import CustomForm from "../CustomForm/CustomForm";
import {FloatingLabel, Form, FormControl, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingAction} from "../../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";

const UserAddWallet = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser.user)
    const [wallet, setWallet] = useState({
        card_number: '',
        description: ''
    })

    const createWalletHandler = e => {
        e.preventDefault()
        console.log('createWalletHandler', wallet)
        console.log('createWalletHandler', user)
        dispatch(setLoadingAction(true))
        axios.post('/wallets', {
            user_id: user.id,
            ...wallet
        }).then(res => {
            console.log('createWalletHandler', res)
            if (res.data.success) {
                setWallet({
                    card_number: '',
                    description: ''
                })
                Inertia.reload()
            }
        }).catch(err => {
            console.log('createWalletHandler err', err)
        }).finally(()=> dispatch(setLoadingAction(false)));
    };

    return (
        <div style={{minWidth: '480px'}}>
            <CustomForm title={
                <p>Add new wallet</p>
            }>
                <form onSubmit={createWalletHandler}>
                    <InputGroup className="mb-3">
                        <label className="input-label">
                            Card number <span>*</span>
                        </label>
                        <FormControl
                            placeholder="Example: 1111-2222-3333-4444"
                            className="input-text"
                            type="text"
                            value={wallet.card_number}
                            onChange={e => setWallet({
                                ...wallet,
                                ['card_number']: e.target.value
                            })}
                            required
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FloatingLabel label="Description">
                            <Form.Control
                                as="textarea"
                                style={{height: '150px', resize: 'none'}}
                                value={wallet.description}
                                onChange={e => setWallet({
                                    ...wallet,
                                    ['description']: e.target.value
                                })}
                            />
                        </FloatingLabel>
                    </InputGroup>
                    <div className="d-flex justify-content-end">
                        <button
                            className="simple-btn-filled"
                            type={"submit"}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </CustomForm>
        </div>
    );
};

export default UserAddWallet;
