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
        {name: 'facebook', img: fb},
        {name: 'insta', img: insta},
        {name: 'telegram', img: telegram},
        {name: 'twitter', img: twitter},
        {name: 'youtube', img: youtube},
    ]
    return (
        <div className={s.socialBlock}>
            {
                socials.map((item, index) =>
                    <OverlayTrigger
                        placement="top"
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
                        <img key={index} className={s.social} src={item.img} alt="fb"/>
                    </OverlayTrigger>
                )
            }

        </div>
    );
};

export default BlueSocialBlock;
