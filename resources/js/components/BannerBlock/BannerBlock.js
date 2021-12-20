import React from 'react';
import s from '../../../sass/components/BannerBlock/BannerBlock.module.scss'

const BannerBlock = () => {
    const banners = [
        {id: 1, name: 'Banner'},
        {id: 2, name: 'Banner'},
        {id: 3, name: 'Banner'},
    ]

    return (
        <section className={s.banners}>
            {
                banners.map((ban, index) =>
                    <div className={s.banner}
                         key={ban.id}>
                        <p>{ban.name}</p>
                    </div>
                )
            }
        </section>
    );
};

export default BannerBlock;
