import React from 'react';
import s from '../../../sass/components/CustomAccordion/CustomAccordion.module.scss'
import {Accordion} from "react-bootstrap";

const CustomAccordion = () => {
    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How is verification processed?</Accordion.Header>
                <Accordion.Body>
                    You are required to join a video call which will be recorded, and in case of rug/honeypot schemes
                    the recording would be uploaded to your social groups for the victims of scam. We will mark your
                    project as verified by CoinMooner team, which will improve your trustworthiness for investors and
                    entire crypto community.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default CustomAccordion;
