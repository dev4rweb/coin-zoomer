import React from 'react';
import {Button} from "react-bootstrap";
import s from '../../../../sass/components/UI/OutlineBtn/OutlineBtn.module.scss'

const OutlineBtn = ({children, maxWith = null}) => {
    if (maxWith) {
        return (
            <Button style={{width: "100%", maxWidth: maxWith}} variant="outline-info" className={s.outlineBtn}>
                {children}
            </Button>
        );
    }
    return (
        <Button variant="outline-info" className={s.outlineBtn}>
            {children}
        </Button>
    );
};

export default OutlineBtn;
