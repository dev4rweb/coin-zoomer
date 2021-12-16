import React from 'react';
import s from '../../sass/components/SocialBlock/SocialBlock.module.scss'
import {PATH_HOME_PAGE} from "../utils/routesPath";
import {InertiaLink} from "@inertiajs/inertia-react";
import instagram from '../../assets/img/instagram.png'
import fb from '../../assets/img/fb.png'
import twitter from '../../assets/img/twitter.png'
import telegram from '../../assets/img/telegram.png'
import tumblr from '../../assets/img/tumblr.png'
import youtube from '../../assets/img/youtube_alt.png'

const SocialBlock = () => {
    const socials = [
        {img: instagram},
        {img: telegram},
        {img: tumblr},
        {img: twitter},
        {img: youtube},
        {img: fb},
    ]

    return (
        <div className={s.socialBlock}>
            {
                socials.map((social, index) =>
                    <InertiaLink
                        href={PATH_HOME_PAGE}
                        key={index}
                        className={s.social}
                    >
                        <img src={social.img} alt="social"/>
                    </InertiaLink>
                )
            }
        </div>
    );
};

export default SocialBlock;
