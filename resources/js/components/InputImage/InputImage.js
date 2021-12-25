import React, {useState} from 'react';
import s from "../../../sass/components/UI/InputImage/InputImage.module.scss";

const InputImage = ({imgLink, content = ''}) => {
    const [value, setValue] = useState(content)

    return (
        <div className={s.container}>
            <img src={imgLink} alt="icon"/>
            <input
                type="text"
                className={s.input}
                value={value}
                placeholder={content}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default InputImage;
