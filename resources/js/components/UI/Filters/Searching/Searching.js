import React, {useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/Searching/Searching.module.scss'
import loopImg from '../../../../../assets/icons/loupe.svg'
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchCoinByQuery} from "../../../../asyncAction/coinInner";

const Searching = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        dispatch(fetchCoinByQuery({name: '', value: ''}, text))
    };

    return (
        <div className={s.searching}>
            <p className={s.title}>Searching</p>
            <Form onSubmit={submitHandler} className={`d-flex ${s.form}`}>
                <FormControl
                    type="search"
                    placeholder="Example: Bitcoin"
                    className={`me-2 ${s.inputSearch}`}
                    aria-label="Search"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button
                    variant="outline-light"
                    className={s.btnSearch}
                    type='submit'
                >
                    <img src={loopImg} alt=""/>
                </Button>
            </Form>
        </div>
    );
};

export default Searching;
