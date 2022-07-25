import React from 'react';
import s from '../../../sass/components/BlueSocialBlock/BlueSocialBlock.module.scss'
import fb from '../../../assets/img/social/fb-blue.png'
import insta from '../../../assets/img/social/insta-blue.png'
import telegram from '../../../assets/img/social/telegram-blue.png'
import twitter from '../../../assets/img/social/fb-blue.png'
import youtube from '../../../assets/img/social/fb-blue.png'
import {OverlayTrigger, Popover, Tooltip} from "react-bootstrap";

const BlueSocialBlock = () => {
    const socials = [
        {name: 'facebook', img: fb, link: 'https://www.facebook.com/CoinZoomer'},
        {name: 'insta', img: insta, link: 'https://www.instagram.com/coinzoomer/'},
        {name: 'telegram', img: telegram, link: 'https://t.me/COINZOOMER'},
        {name: 'twitter', img: twitter, link: 'https://twitter.com/coinzoomer'},
        {name: 'youtube', img: youtube, link: 'https://www.youtube.com/c/CoinZoomer/'},
    ]

    const clickHandler = i => {
        console.log('clickHandler', i)
        window.open(i.link, '_blank').focus();
    };

    return (
        <div className={s.socialBlock}>
            {
                socials.map((item, index) =>
                    <OverlayTrigger
                        placement="top"
                        key={index}
                        overlay={
                            <Popover
                                id="button-tooltip-2"
                                style={{
                                    textTransform: 'uppercase',
                                    padding: '5px 20px',
                                    background: 'white',
                                    color: 'black',
                                    fontSize: '12px',
                                    letterSpacing: '1px',
                                    borderRadius: '4px'
                                }}
                            >
                                {item.name}
                            </Popover>
                        }
                    >
                        <img
                            key={index}
                            className={s.social}
                            src={item.img} alt="fb"
                            onClick={e => clickHandler(item)}
                        />
                    </OverlayTrigger>
                )
            }

        </div>
    );
};

export default BlueSocialBlock;
