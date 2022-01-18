import React from 'react';
import s from '../../../sass/components/CustomForm/CustomForm.module.scss'
import {Form} from "react-bootstrap";

const CustomForm = ({title, children}) => {
    return (
        <div className={s.customForm}>
            <div className={s.title}>{title}</div>
            <div className={s.body}>{children}</div>
        </div>
    );
};

export default CustomForm;
