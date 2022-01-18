import React, {useState} from 'react';
import s from "../../../sass/components/UI/InputImage/InputImage.module.scss";

const InputImage = ({imgLink, content = '', inputHandler = null, required = false}) => {
    const [value, setValue] = useState(content)

    const inpHandler = e => {
        setValue(e.target.value)
        if (inputHandler) {
            inputHandler(e.target.value)
        }
    };

    return (
        <div className={s.container}>
            <img src={imgLink} alt="icon"/>
            <input
                type="text"
                className={s.input}
                value={value}
                placeholder={content}
                onChange={inpHandler}
                required={required}
            />
        </div>
    );
};

export default InputImage;
