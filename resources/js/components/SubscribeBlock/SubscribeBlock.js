import React, {useState} from 'react';
import s from '../../../sass/components/SubscribeBlock/SubscribeBlock.module.scss'
import SectionSeparator from "../UI/SectionSeparator/SectionSeparator";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {storeSubscriberApi} from "../../asyncAction/subscriberApi";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_HOME_PAGE} from "../../utils/routesPath";

const SubscribeBlock = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        console.log('submitHandler', email)
        storeSubscriberApi({email})
            .then(res => {
                console.log('storeSubscriberApi', res)
                if (res.data.success) {
                    dispatch(setErrorsAction({message: 'Subscribed'}))
                    Inertia.visit(PATH_HOME_PAGE)
                } else dispatch(setErrorsAction({message: 'duplicate email'}))
            })
            .catch(err => {
                console.log('storeSubscriberApi err', err)
            });
    };

    return (
        <div className={s.subscribe}>
            <SectionSeparator sectionName={`Subscribe to our newsletter`} />
            <p className={s.text}>Get the best high potential coins right into your inbox</p>
            <form
                onSubmit={submitHandler}
                className={s.inputGroup}
            >
                <FormControl
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="email"
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Button
                    variant="info"
                    className={`fill-btn ${s.btn}`}
                    type="submit"
                >
                    Subscribe
                </Button>
            </form>
        </div>
    );
};

export default SubscribeBlock;
