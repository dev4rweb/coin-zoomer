import React, {useEffect, useState} from 'react';
import s from '../../../sass/components/BannerBlock/BannerBlock.module.scss'

const BannerBlock = () => {
    /*const [banners, setBanners] = useState([
        {id: 1, link: 'Banner', img_path: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'},
        {id: 2, link: 'Banner', img_path: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'},
        {id: 3, link: 'Banner', img_path: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'},
        {id: 4, link: 'Banner', img_path: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'},
    ])*/
    const [banners, setBanners] = useState(null)

    useEffect(() => {
        axios.get('/api/banners')
            .then(res => {
                console.log('BannerBlock res', res)
                setBanners(res.data.models)
            }).catch(err => console.log(err));
    }, []);

    return (
        <section className={s.banners}>
            {
                banners && banners.map((ban, index) =>
                    <a
                        className={s.banner}
                        key={ban.id}
                        href={ban.link}
                        target="_blank"
                    >
                        <img src={ban.img_path} alt="promo"/>
                    </a>
                )
            }
        </section>
    );
};

export default BannerBlock;
