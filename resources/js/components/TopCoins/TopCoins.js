import React from 'react';
import s from '../../../sass/components/TopCoins/TopCoins.module.scss'

const TopCoins = ({classBg = 'green', title}) => {
    let isClass = s.greenBg
    switch (classBg) {
        case 'pink':
            isClass = s.pinkBg
            break;
        case 'blue':
            isClass = s.blueBg
            break
    }

    return (
        <div className={`${s.topCoins} ${isClass}`}>
            <div className={s.contentWrapper}>
                <div className={s.header}>
                    <span>Top</span> {title}
                </div>
            </div>
        </div>
    );
};

export default TopCoins;
