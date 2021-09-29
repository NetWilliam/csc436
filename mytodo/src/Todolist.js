/*
 * Todolist.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import Todo from './Todo'

export default function Todolist({todos = []}) {
    return (
        <div>
            {todos.map((td, i) => <div><Todo {...td} key={'todo-' + i}/><br/></div>)}
        </div>
    )
}
