/*
 * AppReducer.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import {v4 as uuidv4} from 'uuid'

function userReducer(state, action) {
    switch(action.type) {
        case 'ACT_LOGIN':
            return action.username
        case 'ACT_LOGOUT':
            return "";
        case 'ACT_REGIST':
            return action.username
        default:
            return state;
    }
}

function todoReducer(state, action) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    switch(action.type) {
        case 'ACT_CREATE_TODO':
            const newTodo = {
                uuid: uuidv4(),
                title: action.title,
                description: action.description ? action.description : "",
                dateCreated: dateTime,
                complete: false,
                dateCompleted: ""
            }
            return [newTodo, ...state];
        case 'ACT_TOGGLE_TODO':
            return state.map(td => td.uuid !== action.uuid ? td : {...td, complete: !td.complete, dateCompleted: !td.complete ? dateTime : ""})
        case 'ACT_DELETE_TODO':
            return state.filter(td => td.uuid !== action.uuid)
        case 'ACT_FETCH_TODO':
            console.log("action: ACT_FETCH, todos: ", JSON.stringify(action.todos))
            return action.todos
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todo: todoReducer(state.todo, action)
    }
}
