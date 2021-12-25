import React from 'react';
import {Button} from "react-bootstrap";
import s from '../../../../sass/components/UI/OutlineBtn/OutlineBtn.module.scss'

const OutlineBtn = ({children, maxWith = null, clickHandler = null}) => {

    const handleClick = e => {
        // console.log('click')
        if (clickHandler) {
            // console.log('clickHandler')
            clickHandler(e)
        }
    };

    if (maxWith) {
        return (
            <Button
                style={{width: "100%", maxWidth: maxWith}}
                variant="outline-info"
                className={s.outlineBtn}
                onClick={handleClick}
            >
                {children}
            </Button>
        );
    }
    return (
        <Button
            variant="outline-info"
            className={s.outlineBtn}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
};

export default OutlineBtn;
