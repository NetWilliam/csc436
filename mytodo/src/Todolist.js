/*
 * Todolist.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import Todo from './Todo'

export default function Todolist({todos = [], dispatch}) {
    return (
        <div>
            {todos.map((td, i) => <div key={'todo-' + i}><Todo {...td} dispatch={dispatch}/><br/></div>)}
        </div>
    )
}
