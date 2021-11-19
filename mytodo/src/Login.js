/*
 * Login.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "./Contexts";
import { Modal, Form, Button } from "react-bootstrap";

export default function Login({ show, handleClose }) {
    const { state, dispatch } = useContext(StateContext);
    const [username, setUsername] = useState("");
    const [pswd, setPswd] = useState("");
    const [user, login] = useResource((username, password) => ({
        url: "auth/login",
        method: "post",
        data: { username, password: pswd },
    }));
    const [loginFailed, setLoginFailed] = useState(false);
    function handleUsername(evt) {
        setUsername(evt.target.value);
    }
    function handlePassword(evt) {
        setPswd(evt.target.value);
    }

    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
            if (user.error) {
                setLoginFailed(true);
                alert("failed");
            } else {
                setLoginFailed(false);
                console.log(user.data);
                dispatch({
                    type: "ACT_LOGIN",
                    username,
                    access_token: user.data.access_token,
                });
            }
        }
    }, [user]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    login(username, pswd);
                    handleClose();
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="login-username">Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={handleUsername}
                        name="login-username"
                        id="login-username"
                    />
                    <Form.Label htmlFor="login-password">Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={pswd}
                        onChange={handlePassword}
                        name="login-password"
                        id="login-password"
                    />
                    {loginFailed && (
                        <Form.Text style={{ color: "red" }}>
                            Invalid username or password
                        </Form.Text>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        disabled={username.length === 0}
                        type="submit"
                    >
                        Login
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
