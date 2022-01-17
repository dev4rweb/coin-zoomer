import React, {useState} from 'react';
import {Button, Card, Container, FloatingLabel, Form} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../reducers/errorsReducer";

const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)
    const [validated, setValidated] = useState(false);

    const submitHandler = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === false) {

        } else {
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
        }

        setValidated(true);

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
                                onSubmit={submitHandler}
                            >
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
