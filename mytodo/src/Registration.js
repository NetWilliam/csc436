/*
 * Registration.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "./Contexts";
import { Form, Modal, Button } from "react-bootstrap";

export default function Registration({ show, handleClose }) {
    const { dispatch } = useContext(StateContext);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: "",
    });
    const [status, setStatus] = useState("");
    const [user, register] = useResource((username, password) => ({
        url: "auth/register",
        method: "post",
        data: { username, password, passwordConfirmation: password },
    }));
    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: "ACT_REGIST", username: user.data.username, access_token: user.data.access_token });
        }
    }, [user]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    register(formData.username, formData.password);
                    handleClose();
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="register-username">
                        Username:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                username: e.target.value,
                            })
                        }
                        name="register-username"
                        id="register-username"
                    />
                    <Form.Label htmlFor="register-password">
                        Password:
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="register-password"
                        id="register-password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    <Form.Label htmlFor="register-password-repeat">
                        Repeat password:
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="register-password-repeat"
                        id="register-password-repeat"
                        value={formData.passwordRepeat}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                passwordRepeat: e.target.value,
                            })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={
                            formData.username.length === 0 ||
                            formData.password.length === 0 ||
                            formData.password !== formData.passwordRepeat
                        }
                    >
                        Register
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
