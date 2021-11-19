/*
 * TodoPage.js
 * Copyright (C) 2021 liuweibo <liuweibo@Ubuntu-WSL2>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useEffect, useContext } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../Contexts";
import { Link } from "react-navi";
import Todo from "../Todo";

export default function TodoPage({ id }) {
    const { state } = useContext(StateContext);

    const [todo, getTodo] = useResource(() => ({
        url: `/todo/${id}`,
        method: "get",
        headers: { Authorization: `${state.user.access_token}` },
    }));

    useEffect(getTodo, [id]);

    return (
        <div>
            {todo && todo.data ? <Todo {...todo.data} /> : "Loading..."}
            <div>
                <Link href="/">Go back</Link>
            </div>
        </div>
    );
}
