/*
 * Todo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useState, useEffect, useContext } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "./Contexts";

import { Link } from "react-navi";
import { Card, Button } from "react-bootstrap";

export default function Todo({
    _id,
    title,
    author,
    description = "",
    dateCreated,
    complete,
    dateCompleted,
    short = false,
    dispatch,
}) {
    const { state } = useContext(StateContext);
    const { user } = state;
    const [todoState, setTodoState] = useResource(
        ({ title, description, dateCreated, complete, dateCompleted }) => ({
            url: `/todo/${encodeURI(_id)}`,
            method: "put",
            headers: { Authorization: `${user.access_token}` },
            data: {
                _id,
                complete,
            },
        })
    );
    const [drop, remTodo] = useResource(({ _id }) => ({
        url: `/todo/${encodeURI(_id)}`,
        method: "delete",
        headers: { Authorization: `${user.access_token}` },
    }));
    function handleDelete(evt) {
        remTodo({ _id });
        dispatch({ type: "ACT_DELETE_TODO", _id });
    }

    function handleComplete(evt) {
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
        var dateCompleted = evt.target.checked ? dateTime : "";
        setTodoState({
            _id,
            title,
            description,
            dateCreated,
            complete: evt.target.checked,
            dateCompleted,
        });
        dispatch({ type: "ACT_TOGGLE_TODO", _id, dateCompleted });
    }
    let processedContent = description;
    if (short) {
        if (description.length > 30) {
            processedContent = description.substring(0, 30) + "...";
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Link href={`/todo/${_id}`}>{title}</Link>
                </Card.Title>
                <Card.Subtitle>
                    <i>
                        Written by <b>{author.username}</b>
                    </i>
                </Card.Subtitle>
                <Card.Text>{processedContent}</Card.Text>

                <input
                    type="checkbox"
                    checked={complete}
                    onChange={(e) => {
                        //toggleTodo(postId, e.target.checked);
                        handleComplete(e);
                    }}
                />
                <Button
                    variant="link"
                    onClick={(e) => {
                        //deleteTodo(postId);
                        handleDelete(e);
                    }}
                >
                    Delete Post
                </Button>
                {complete && (
                    <i>
                        Completed on:{" "}
                        {new Date(dateCompleted).toLocaleDateString("en-us")}
                    </i>
                )}
                {short && <Link href={`/todo/${_id}`}>View full post</Link>}
            </Card.Body>
        </Card>
    );
    /*
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleDelete(e);
            }}
        >
            <label htmlFor="todo-title">title: </label>
            <label name="todo-title" id="todo-title">
                {title}
            </label>
            <br />
            <label htmlFor="todo-desc">description: </label>
            <label name="todo-desc" id="todo-desc">
                {description}
            </label>
            <br />
            <label htmlFor={"todo-checkbox" + _id}>finished: </label>
            <input
                type="checkbox"
                name={"todo-checkbox" + _id}
                id={"todo-checkbox" + _id}
                checked={complete}
                onChange={handleComplete}
            />
            <br />
            <label>created at: {dateCreated} </label>
            <br />
            {complete && (
                <>
                    <label>finished at: {dateCompleted} </label>
                    <br />
                </>
            )}
            <button type="submit" value="delete">
                delete
            </button>
        </form>
    );
    */
}
