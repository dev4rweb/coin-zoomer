import React, {useState} from 'react';
import {Toast, ToastContainer} from "react-bootstrap";
import flame from '../../../../assets/icons/ic-flame-128.png'
import SingleMessage from "./SingleMessage";
import {useDispatch, useSelector} from "react-redux";
import {setErrorsAction} from "../../../reducers/errorsReducer";

const Messages = () => {
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors.errors)
    // console.log('Messages errors', errors)

    if (errors) {
        setTimeout(() => {
            dispatch(setErrorsAction(null))
        }, 3500);
    }

    return (
        <ToastContainer className="p-3" position={`bottom-end`}>
            {
                errors && errors.message &&
                <SingleMessage msg={errors.message}/>
            }
            {
                errors && errors.errors && errors.errors.email &&
                <SingleMessage msg={errors.errors.email}/>
            }
            {
                errors && errors.errors && errors.errors.name &&
                <SingleMessage msg={errors.errors.name}/>
            }

            {
                errors && errors.errors && errors.errors.password &&
                <SingleMessage msg={errors.errors.password}/>
            }
        </ToastContainer>
    );
};

export default Messages;
