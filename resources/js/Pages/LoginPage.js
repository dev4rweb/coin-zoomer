import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import Layout from "../components/Layout";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.set('email', email)
        fd.set('password', password)
        fd.set('remember', isRemember)

        axios.post('/login', fd)
            .then(res => {
                console.log(res)
                if (res.status === 204) {
                    console.log('You are logged in')
                    Inertia.visit('/home')
                }
            })
            .catch(err => {
                console.log(err.response.data)
            });
    };

    return (
        <Layout>
            <h1>Login Page</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card">
                        <Form onSubmit={submitHandler}>
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
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
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;
