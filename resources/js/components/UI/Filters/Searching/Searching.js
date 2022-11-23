import React, {createRef, useEffect, useRef, useState} from 'react';
import s from '../../../../../sass/components/UI/Filters/Searching/Searching.module.scss'
import loopImg from '../../../../../assets/icons/loupe.svg'
import {Button, ButtonGroup, Form, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery, fetchCoinByQueryObj} from "../../../../asyncAction/coinInner";
import {setSearchingWordAction} from "../../../../reducers/coinReducer";
import {getCoinsByQueryObj} from "../../../../utils/navigate";

const Searching = ({isMod = false}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const sortObj = useSelector(state => state.coin.sortObj)
    const inputRef = useRef(null)

    useEffect(() => {
        if (isMod) {
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            let val = urlParams.get('search_name')
            if(val) setText(val)
            if (val && val.trim()) inputRef.current.focus()
        }
    },[]);

    const submitHandler = e => {
        e.preventDefault()
        dispatch(setSearchingWordAction(text))
        sortObj.search = text
        sortObj.page = "1"
        dispatch(fetchCoinByQueryObj(sortObj))
    };

    const quickSearchHandler = e => {
        e.preventDefault()
        setText(e.target.value)
        console.log('quickSearchHandler', e.target.value)
        dispatch(setSearchingWordAction(e.target.value))
        sortObj.search = e.target.value
        sortObj.page = "1"
        if (isMod) getCoinsByQueryObj(sortObj)
        else dispatch(fetchCoinByQueryObj(sortObj))
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
                    ref={inputRef}
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
