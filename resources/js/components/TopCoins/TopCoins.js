import React from 'react';
import s from '../../../sass/components/TopCoins/TopCoins.module.scss'
import TopCoinsItem from "./TopCoinsItem";

const TopCoins = ({classBg = 'green', title, data}) => {
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
                <ul className={s.listContent}>
                    {
                        data && data.map((i, index) =>
                            <TopCoinsItem key={index} data={i} index={index}/>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default TopCoins;
