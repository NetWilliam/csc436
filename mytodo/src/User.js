/*
 * User.js
 * Copyright (C) 2021 liuweibo <liuweibo@Ubuntu-WSL2>
 *
 * Distributed under terms of the MIT license.
 */
import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "./Contexts";

import { Link } from "react-navi";
import { Card, Button } from "react-bootstrap";

export default function Todo({ _id, username, todos }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Link href={`/user/${_id}`}>{username}</Link>
                </Card.Title>
                <Card.Subtitle>
                    <i>
                        id <b>{_id}</b>
                    </i>
                </Card.Subtitle>
                <Card.Text>{todos.length} items</Card.Text>
            </Card.Body>
        </Card>
    );
}
