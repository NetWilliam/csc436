/*
 * Todo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState} from 'react'

export default function Todo({title, description="", dateCreated, user_complete, user_dateCompleted}) {
    const [complete, setComplete] = useState(user_complete)
    const [dateCompleted, setDateCompleted] = useState(user_dateCompleted)

    function handleComplete(evt) {
        setComplete(evt.target.checked);
        if (complete) {
            setDateCompleted("");
        } else {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            setDateCompleted(dateTime);
        }
    }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="todo-title">title: </label>
            <label name="todo-title" id="todo-title">{title}</label>
            <br/>
            <label htmlFor="todo-desc">title: </label>
            <label name="todo-desc" id="todo-desc">{description}</label>
            <br/>
            <label htmlFor="todo-checkbox">finished: </label>
            <input type="checkbox" name="todo-checkbox" id="todo-checkbox" checked={complete} onChange={handleComplete}/>
            <br/>
            <label>created at: {dateCreated} </label>
            <br/>
            {complete && <label>finished at: {dateCompleted} </label>}
        </form>
    )
}
