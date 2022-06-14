import React, {useState} from 'react';
import s from '../../../../sass/components/UI/InputTwoImageGroup/InputTwoImageGroup.module.scss'
import link from '../../../../assets/img/ic-link.png'

const InputTwoImageGroup = ({imgLink, content}) => {
    const [value, setValue] = useState(content)

    const connectSocialHandler = e => {
        console.log('connectSocialHandler', content)
        if (content === '@coinzoomer')
            window.open('https://t.me/CoinZoomerOfficial', '_blank').focus();
        if(content === 'admin@coinzoomer.com')
            window.open('mailto:admin@coinzoomer.com', '_blank').focus();
    };

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
            <button
                type="button"
                className={s.button}
                onClick={connectSocialHandler}
            >
                <img src={link} alt="icon"/>
            </button>
        </div>
    );
};

export default InputTwoImageGroup;
