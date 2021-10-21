/*
 * Todo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState, useEffect} from 'react'
import {useResource} from 'react-request-hook'

export default function Todo({uuid, title, description="", dateCreated, complete, dateCompleted, dispatch}) {
    const [todoState, setTodoState] = useResource(({uuid, title, description, dateCreated, complete, dateCompleted}) => ({
        url: `/todos/${encodeURI(uuid)}`,
        method: 'put',
        data: {uuid, title, description, dateCreated, complete, dateCompleted}
    }))
    const [drop, remTodo] = useResource(({uuid}) => ({
        url: `/todos/${encodeURI(uuid)}`,
        method: 'delete',
        data: {uuid}
    }))
    /*
    useEffect(() => {
        if (todoState && todoState.data) {
            dispatch({type: "ACT_TOGGLE_TODO", todo: {...todoState.data}})
        }
    }, [todoState])
    */
    function handleDelete(evt) {
        remTodo({uuid})
        dispatch({type: "ACT_DELETE_TODO", uuid: uuid})
    }

    function handleComplete(evt) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        var dateCompleted = evt.target.checked ? dateTime : ""
        setTodoState({uuid, title, description, dateCreated, complete: evt.target.checked, dateCompleted})
        dispatch({type: "ACT_TOGGLE_TODO", uuid, dateCompleted})
    }
    return (
        <form onSubmit={e => {e.preventDefault(); handleDelete(e);}}>
            <label htmlFor="todo-title">title: </label>
            <label name="todo-title" id="todo-title">{title}</label>
            <br/>
            <label htmlFor="todo-desc">description: </label>
            <label name="todo-desc" id="todo-desc">{description}</label>
            <br/>
            <label htmlFor={"todo-checkbox" + uuid}>finished: </label>
            <input type="checkbox" name={"todo-checkbox" + uuid} id={"todo-checkbox" + uuid} checked={complete} onChange={handleComplete}/>
            <br/>
            <label>created at: {dateCreated} </label>
            <br/>
            {complete && <><label>finished at: {dateCompleted} </label><br/></>}
            <button type="submit" value="delete">delete</button>
        </form>
    )
}
