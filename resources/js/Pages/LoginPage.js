import React, {useState} from 'react';
import {Button, Card, Container, FloatingLabel, Form} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setErrorsAction, setLoadingAction} from "../reducers/errorsReducer";

const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)
    const [validated, setValidated] = useState(false);
    const [isShowCode, setIsShowCode] = useState(false)
    const [verificationCode, setVerificationCode] = useState('')
    const [user, setUser] = useState(null)
    const upperText = 'We have sent a verification code to your' +
        ' email - xxx. Please check your email and provide the code that you' +
        ' have received. Don\'t forget to check spam if you did not receive it.' +
        ' If you have any problems, please contact '

    const getUserCode = e => {
        e.preventDefault();
        e.stopPropagation();
        const fd = new FormData();
        fd.set('email', email);
        fd.set('password', password);
        fd.set('remember', isRemember);

        if (!user) {
            dispatch(setLoadingAction(true))
            axios.post('/api/get-verified-code', fd)
                .then(res => {
                    console.log('get-verified-code', res)
                    const curUser = res.data.model
                    setUser(curUser)
                    if (curUser && (curUser.is_admin || curUser.verification_code === 1)) {
                        submitHandler(e)
                    }
                    if (curUser && curUser.verification_code > 1) {
                        setIsShowCode(true);
                        dispatch(setErrorsAction({
                            message: 'Verification code has been sent to your email'
                        }))
                    }
                }).catch(err => {
                console.log('get-verified-code', err)
            }).finally(() => {
                dispatch(setLoadingAction(false))
            });
        }
        if (user && user.verification_code === 1)
            submitHandler(e)

        if (user && user.verification_code === +verificationCode) {
            axios.post(`/api/change-verification-code`, {
                user_id: user.id
            }).then(res => {
                console.log('update code', res)
                if (res.data.success) {
                    submitHandler(e);
                } else dispatch(setErrorsAction({
                    message: 'Something was wrong'
                }));
            }).catch(err => {
                console.log('update code', err)
                dispatch(setErrorsAction({
                    message: 'Something was wrong'
                }))
            });
        }


        if (user && user.verification_code !== +verificationCode)
            dispatch(setErrorsAction({
                message: 'Incorrect code'
            }))
    };

    const submitHandler = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        const fd = new FormData();
        fd.set('email', email);
        fd.set('password', password);
        fd.set('remember', isRemember);

        axios.post('/login', fd)
            .then(res => {
                // console.log('LoginPage res', res)
                if (res.status === 204) {
                    dispatch(setErrorsAction({
                        message: 'You are logged in'
                    }))
                    // console.log('You are logged in')
                    Inertia.visit('/user-panel')
                }
            })
            .catch(err => {
                // console.log('LoginPage err', err.response.data)
                dispatch(setErrorsAction(err.response.data))
            });
        /*if (form.checkValidity() === false) {

        } else {

        }
        setValidated(true);*/

    };

    return (
        <Layout>
            <Container>
                <h1 className="mt-5 mb-5 text-center">Login Page</h1>
                <div className="mt-5">
                    <Card className="row justify-content-center">
                        <div className="card p-5">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={getUserCode}
                            >
                                {
                                    isShowCode &&
                                    <h3
                                        className="mb-3"
                                        style={{color: '#1d2147', textAlign: 'center'}}
                                    >
                                        {upperText} <a href="mailto:admin@coinzoomer.com">admin@coinzoomer.com</a>
                                    </h3>
                                }

                                <FloatingLabel
                                    label="Enter email"
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        required
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter email"
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please write Email.
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                                {
                                    isShowCode &&
                                    <FloatingLabel
                                        label="Verification code"
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            required
                                            type="text"
                                            name="code"
                                            value={verificationCode}
                                            placeholder="verification code"
                                            onChange={event => setVerificationCode(event.target.value)}
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please verification code
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                }

                                <FloatingLabel
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                    label="Password"
                                >
                                    <Form.Control
                                        required
                                        name="password"
                                        type="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please write password.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember password"
                                        name="remember"
                                        checked={isRemember}
                                        onChange={event => setIsRemember(event.target.checked)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Card>
                </div>
            </Container>
        </Layout>
    );
};

export default LoginPage;
