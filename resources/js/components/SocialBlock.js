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
import discord from '../../assets/img/social/discord.png'

const SocialBlock = () => {
    const socials = [
        {img: instagram, link: 'https://www.instagram.com/coinzoomer/'},
        {img: telegram, link: 'https://t.me/COINZOOMER'},
        {img: discord, link: 'https://discord.gg/TKjPfSUc4g'},
        {img: twitter, link: 'https://twitter.com/coinzoomer'},
        {img: youtube, link: 'https://www.youtube.com/channel/UC3NO8K12lNKz9qaZ5KoM19w'},
        {img: fb, link: 'https://www.facebook.com/CoinZoomer'},
    ]

    return (
        <div className={s.socialBlock}>
            {
                socials.map((social, index) =>
                    <a
                        href={social.link}
                        target="_blank"
                        key={index}
                        className={s.social}
                    >
                        <img src={social.img} alt="social"/>
                    </a>
                )
            }
        </div>
    );
};

export default SocialBlock;
