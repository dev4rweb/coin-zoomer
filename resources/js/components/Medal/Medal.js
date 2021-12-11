import React from 'react';
import s from '../../../sass/components/Medal/Medal.module.scss'
import medalImg from '../../../assets/img/medal.png'

const Medal = ({children}) => {
    return (
        <div className={s.medal}>
            <img src={medalImg} alt="medal"/>
            <div>{children}</div>
        </div>
    );
};

export default Medal;
