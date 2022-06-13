import React, {useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/Searching/Searching.module.scss'
import loopImg from '../../../../../assets/icons/loupe.svg'
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery, fetchCoinByQueryObj} from "../../../../asyncAction/coinInner";
import {setSearchingWordAction} from "../../../../reducers/coinReducer";

const Searching = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const sortObj = useSelector(state => state.coin.sortObj)

    const submitHandler = e => {
        e.preventDefault()
        dispatch(setSearchingWordAction(text))
        sortObj.search = text
        dispatch(fetchCoinByQueryObj(sortObj))
    };

    const quickSearchHandler = e => {
        e.preventDefault()
        setText(e.target.value)
        console.log('quickSearchHandler', e.target.value)
        dispatch(setSearchingWordAction(e.target.value))
        sortObj.search = e.target.value
        dispatch(fetchCoinByQueryObj(sortObj))
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
                    onChange={quickSearchHandler}
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
