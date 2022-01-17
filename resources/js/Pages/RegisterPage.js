import React, {useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../reducers/errorsReducer";

const RegisterPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [validated, setValidated] = useState(false);

    const submitHandler = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        // console.log('email', email)
        // console.log('password', password)

        if (form.checkValidity() === true) {

            const fd = new FormData();
            fd.set('name', name);
            fd.set('email', email);
            fd.set('password', password);
            fd.set('password_confirmation', passwordConfirm);

            axios.post('/register', fd)
                .then(res => {
                    // console.log('register', res)
                    if (res.status === 201) { // before was 204
                        // console.log('You are logged in')
                        Inertia.visit('/user-panel')
                        dispatch(setErrorsAction({message: 'Account Created!'}))
                    }
                })
                .catch(err => {
                    // console.log(err.response.data)
                    dispatch(setErrorsAction(err.response.data))
                });
        }

        setValidated(true);
    };

    return (
        <Layout>
            <Container>
                <h1 className="mt-5 mb-5 text-center">Register Page</h1>
                <div className="mt-5">
                    <div className="row justify-content-center">
                        <div className="card p-5">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={submitHandler}
                            >
                                <FloatingLabel
                                    className="mb-3"
                                    controlId="formBasicName"
                                    label="Name"
                                >
                                    <Form.Control
                                        required
                                        type="text"
                                        name="name"
                                        value={name}
                                        placeholder="Your name"
                                        onChange={event => setName(event.target.value)}
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please write your name.
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                                <FloatingLabel
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                    label="Email address"
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
                                        Please write Password.
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                                <FloatingLabel
                                    className="mb-3"
                                    controlId="formBasicPasswordConfirm"
                                    label="Password confirm"
                                >
                                    <Form.Control
                                        required
                                        name="password_confirmation"
                                        type="password"
                                        value={passwordConfirm}
                                        placeholder="Password"
                                        onChange={event => setPasswordConfirm(event.target.value)}
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please confirm Password.
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default RegisterPage;
