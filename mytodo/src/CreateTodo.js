/*
 * CreateTodo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "./Contexts";
import { useNavigation } from "react-navi";
import { Form, Button } from "react-bootstrap";

export default function CreateTodo() {
    const navigation = useNavigation();

    const { state, dispatch } = useContext(StateContext);
    const { user } = state;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [todo, createTodo] = useResource(
        ({
            title,
            description,
            dateCreated,
            complete = false,
            dateCompleted = null,
        }) => ({
            url: "/todo",
            method: "post",
            headers: { Authorization: `${user.access_token}` },
            data: { title, description, dateCreated, complete, dateCompleted },
        })
    );
    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: "ACT_CREATE_TODO", todo: todo.data });
            console.log("create new todo: " + JSON.stringify(todo.data));
            navigation.navigate(`/todo/${todo.data._id}`);
        }
    }, [todo]);
    function handleCreate() {
        var today = new Date();
        var date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        var time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        var dateTime = date + " " + time;

        createTodo({ title, description, dateCreated: dateTime });
    }
    return (
        state.user.username && (
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCreate();
                }}
            >
                Add Todo:
                <br />
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        )
    );

    /*
    return (
        state.user.username && (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCreate();
                }}
            >
                Add Todo:
                <br />
                <label htmlFor="todo-title">title: </label>
                <input
                    type="text"
                    id="todo-title"
                    name="todo-title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label htmlFor="todo-desc">description: </label>
                <textarea
                    id="todo-desc"
                    name="todo-desc"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button type="submit" name="create">
                    create
                </button>
            </form>
        )
    );
    */
}
