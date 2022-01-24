import React from 'react';
import s from '../../../../sass/components/UI/CustomBadge/CustomBadge.module.scss'
import {Badge} from "react-bootstrap";
import {useDispatch} from "react-redux";

const CustomBadge = ({data, removeHandler = null}) => {

    const handleRemove = e => {
        // console.log('handleRemove', data)
        if (removeHandler) {
            removeHandler(data)
        }
    };

    return (
        <div className={s.customBadge}>
            <Badge className={s.badge} pill bg="info">
                {data}
            </Badge>
            <span
                onClick={handleRemove}
                className={s.close}
            >
                &times;
            </span>
        </div>
    );
};

export default CustomBadge;
