import React from 'react';
import s from '../../../sass/components/UI/AppNavBtn/AppNavBtn.module.scss'
import {OverlayTrigger, Popover} from "react-bootstrap";
import winImg from '../../../assets/img/win.png'
import PopoverItem from "./Popover/PopoverItem";

/*https://react-bootstrap.github.io/components/overlays/#popovers*/

const data = [
    {id: 0, img: winImg, title: 'NFT MARKETPLACE', text: 'Soon and just one label'},
    // {id: 1, img: winImg, title: 'NFT MARKETPLACE', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'},
    // {id: 2, img: winImg, title: 'NFT MARKETPLACE', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'},
]

const popover = (
    <Popover id="popover-basic">
        {/*<Popover.Header as="h3">Popover</Popover.Header>*/}
        <Popover.Body>
            {
                data && data.map(item => <PopoverItem key={item.id} data={item} />)
            }
        </Popover.Body>
    </Popover>
);

const AppNavBtn = () => {
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className={s.appNavBtn}>
                <div className={s.navBtn}>
                    <div className={s.message}/>
                </div>
            </div>
        </OverlayTrigger>
    );
};

export default AppNavBtn;
