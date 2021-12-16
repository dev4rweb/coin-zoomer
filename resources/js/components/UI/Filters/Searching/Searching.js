import React from 'react';
import s from '../../../../../sass/components/UI/Filters/Searching/Searching.module.scss'
import loopImg from '../../../../../assets/icons/loupe.svg'
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";

const Searching = () => {
    return (
        <div className={s.searching}>
            <p className={s.title}>Searching</p>
            <Form className={`d-flex ${s.form}`}>
                <FormControl
                    type="search"
                    placeholder="Example: Bitcoin"
                    className={`me-2 ${s.inputSearch}`}
                    aria-label="Search"
                />
                <Button
                    variant="outline-light"
                    className={s.btnSearch}
                >
                    <img src={loopImg} alt=""/>
                </Button>
            </Form>
        </div>
    );
};

export default Searching;
