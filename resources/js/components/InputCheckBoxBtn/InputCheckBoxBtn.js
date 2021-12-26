import React, {useState} from 'react';
import s from "../../../sass/components/InputCheckBoxBtn/InputCheckBoxBtn.module.scss";
import link from "../../../assets/img/ic-link.png";
import {ToggleButton} from "react-bootstrap";

const InputCheckBoxBtn = ({imgLink, placeholder}) => {
    const [value, setValue] = useState(placeholder)
    const [checked, setChecked] = useState(false)

    const clickHandler = e => {
        console.log('clickHandler', checked)
        setChecked(!checked)
    };

    return (
        <div className={s.container}>
            <img src={imgLink} alt="icon"/>
            <input
                type="text"
                className={s.input}
                value={value}
                placeholder={placeholder}
                onChange={event => setValue(event.target.value)}
            />
            <button
                type="button"
                className={s.checkBox}
                onClick={clickHandler}
            >
                {
                    checked && <div className={s.square} />
                }
            </button>
        </div>
    );
};

export default InputCheckBoxBtn;
