import React from 'react';
import s from '../../../sass/components/SubscribeBlock/SubscribeBlock.module.scss'
import SectionSeparator from "../UI/SectionSeparator/SectionSeparator";
import {Button, FormControl, InputGroup} from "react-bootstrap";

const SubscribeBlock = () => {
    return (
        <div className={s.subscribe}>
            <SectionSeparator sectionName={`Subscribe to our newsletter`} />
            <p className={s.text}>Get the best high potential coins right into your inbox</p>
            <div className={s.inputGroup}>
                <FormControl
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="email"
                    type='email'
                />
                <Button
                    variant="info"
                    className={`fill-btn ${s.btn}`}
                >
                    Subscribe
                </Button>
            </div>
        </div>
    );
};

export default SubscribeBlock;
