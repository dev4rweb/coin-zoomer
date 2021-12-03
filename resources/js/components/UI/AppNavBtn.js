import React from 'react';
import s from '../../../sass/components/UI/AppNavBtn/AppNavBtn.module.scss'
import {OverlayTrigger, Popover} from "react-bootstrap";

/*https://react-bootstrap.github.io/components/overlays/#popovers*/
const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
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
