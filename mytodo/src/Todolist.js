/*
 * Todolist.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useContext } from "react";
import Todo from "./Todo";
import { StateContext } from "./Contexts";

export default function Todolist() {
    const { state, dispatch } = useContext(StateContext);
    const { todo } = state;
    return (
        <div>
            {console.log("todo: " + JSON.stringify(todo))}
            {todo.length ? (
                todo.map((td, i) => (
                    <div key={"todo-" + i}>
                        <Todo {...td} dispatch={dispatch} />
                        <br />
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}
