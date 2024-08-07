import React from 'react';
import s from '../../../../sass/components/UI/CustomBadge/CustomBadge.module.scss'
import {Badge} from "react-bootstrap";
import {useDispatch} from "react-redux";

const CustomBadge = ({data, removeHandler = null}) => {
    let bgColor = 'info'
    let text = 'light'
    switch (data) {
        case 'eth':
            bgColor = 'success'
            break;
        case 'bsc':
            bgColor = 'warning'
            break
        case 'fantom':
            bgColor = 'primary'
            break
        case 'mumbai':
            bgColor = 'secondary'
            break
        case 'polygon':
            bgColor= 'danger'
            break
        case 'avalanche':
            bgColor = 'light'
            text = 'dark'
            break
        case 'mainnet':
            bgColor='dark'
            break
        case 'solana':
            bgColor = 'primary'
            break
    }

    const handleRemove = e => {
        // console.log('handleRemove', data)
        if (removeHandler) {
            removeHandler(data)
        }
    };

    return (
        <div className={s.customBadge}>
            <Badge className={s.badge} bg={bgColor} text={text}>
                {data}
            </Badge>
            {/*<span
                onClick={handleRemove}
                className={s.close}
            >
                &times;
            </span>*/}
        </div>
    );
};

export default CustomBadge;
