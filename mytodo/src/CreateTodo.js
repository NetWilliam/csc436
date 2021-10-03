/*
 * CreateTodo.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState} from 'react'

export default function CreateTodo({user, dispatch}) {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: "ACT_CREATE_TODO", title: title, description: description})}}>
            Add Todo:
            <br/>

            <label htmlFor="todo-title">title: </label>
            <input type="text" id="todo-title" name="todo-title" onChange={e => setTitle(e.target.value)}/>
            <br/>

            <label htmlFor="todo-desc">description: </label>
            <textarea id="todo-desc" name="todo-desc" onChange={e => setDescription(e.target.value)}/>
            <br/>


            <button type="submit" name="create">create</button>
        </form>
    )
}
