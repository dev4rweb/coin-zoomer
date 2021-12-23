import React, {useState} from 'react';
import s from '../../../../sass/components/UI/InputTwoImageGroup/InputTwoImageGroup.module.scss'
import link from '../../../../assets/img/ic-link.png'

const InputTwoImageGroup = ({imgLink, content}) => {
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
            <button type="button" className={s.button}>
                <img src={link} alt="icon"/>
            </button>
        </div>
    );
};

export default InputTwoImageGroup;
