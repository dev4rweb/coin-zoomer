import React, {useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import {Button, Form} from "react-bootstrap";
import Layout from "../components/Layout";

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('email', email)
        // console.log('password', password)

        const fd = new FormData();
        fd.set('name', name)
        fd.set('email', email)
        fd.set('password', password)
        fd.set('password_confirmation', passwordConfirm)


        axios.post('/register', fd)
            .then(res => {
                console.log('register', res)
                if (res.status === 201) { // before was 204
                    // console.log('You are logged in')
                    Inertia.visit('/user-panel')
                }
            })
            .catch(err => {
                console.log(err.response.data)
            })
    };

    return (
        <Layout>
            <h1>Register Page</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card">
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Enter Email"
                                    onChange={event => setName(event.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your name with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter email"
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password_confirmation"
                                    type="password"
                                    value={passwordConfirm}
                                    placeholder="Password"
                                    onChange={event => setPasswordConfirm(event.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterPage;
