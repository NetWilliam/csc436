/*
 * HomePage.js
 * Copyright (C) 2021 liuweibo <liuweibo@Ubuntu-WSL2>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import Todolist from "../Todolist";

export default function HomePage() {
    const { state, dispatch } = useContext(StateContext);
    const [todos, getTodos] = useResource(() => ({
        url: "/todo",
        method: "get",
        headers: { Authorization: `${state.user.access_token}` },
    }));
    useEffect(() => {
        getTodos();
    }, [state.user.access_token]);

    useEffect(() => {
        if (todos && todos.isLoading === false && todos.data) {
            console.log(todos.data);
            dispatch({ type: "ACT_FETCH_TODO", todo: todos.data.todo });
        }
    }, [todos]);
    const { data, isLoading } = todos;
    if (state.user.username) {
        return (
            <>
                {isLoading && "Todos loading..."}
                <Todolist />
            </>
        );
    } else {
        return <>Login to view Todo items</>;
    }
}
