/*
 * Todo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState} from 'react'

export default function Todo({uuid, title, description="", dateCreated, complete, dateCompleted, dispatch}) {

    function handleComplete(evt) {
        dispatch({type: "ACT_TOGGLE_TODO", uuid: uuid})
    }
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: "ACT_DELETE_TODO", uuid: uuid})}}>
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
            <input type="submit" value="delete"/>
        </form>
    )
}
