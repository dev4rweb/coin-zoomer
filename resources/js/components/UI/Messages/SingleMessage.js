import React, {useState} from 'react';
import {Toast} from "react-bootstrap";
import flame from "../../../../assets/icons/ic-flame-128.png";
import logo from '../../../../assets/img/logo.png'

const SingleMessage = ({msg}) => {
    const [show, setShow] = useState(true);

    const closeHandler = e => {
        setShow(false)
    };

    return (
        <Toast
            onClose={closeHandler}
            show={show}
            delay={3000}
            autohide
        >
            <Toast.Header>
                <img height="20px" src={flame} className="rounded me-2" alt="" />
                <strong className="me-auto">Coin Zoomer</strong>
                {/*<img src={logo} alt="logo" width="150px"/>*/}
                <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
        </Toast>
    );
};

export default SingleMessage;
