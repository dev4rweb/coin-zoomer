import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {Button, Container} from "react-bootstrap";

const MolarisPage = () => {
    const serverUrl = "https://rizf3qutfphs.usemoralis.com:2053/server";
    const appId = "zVdq6DB0JYc29161Ht6oOBIe970mXhAMXOL4fAUv";

    useEffect(() => {
        Moralis.start({ serverUrl, appId });
        console.log('MolarisPage')
    }, []);

    /* Authentication code */
    async function login() {
        let user = Moralis.User.current();
        if (!user) {
            user = await Moralis.authenticate()
        }
        console.log("logged in user:", user);
    }

    async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
    }

    return (
        <Layout>
            <Container>
                <h1>Molaris Page</h1>
                <div>
                    Result
                </div>
                <div>
                    <Button
                        variant="outline-success"
                        onClick={login}
                    >
                        Moralis Metamask Login
                    </Button>

                    <Button
                        variant="outline-danger"
                        onClick={logOut}
                    >
                        Logout
                    </Button>
                </div>
            </Container>
        </Layout>
    );
};

export default MolarisPage;
