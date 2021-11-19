/*
 * AppReducer.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import { v4 as uuidv4 } from "uuid";

function userReducer(state, action) {
    switch (action.type) {
        case "ACT_LOGIN":
        case "ACT_REGIST":
            return {
                username: action.username,
                access_token: action.access_token,
            };
        case "ACT_LOGOUT":
            return { username: "", access_token: "" };
        default:
            return state;
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case "ACT_CREATE_TODO":
            const newTodo = action.todo;
            return [newTodo, ...state];
        case "ACT_TOGGLE_TODO":
            console.log("state state of: " + JSON.stringify(action._id));
            return state.map((td) =>
                td._id !== action._id
                    ? td
                    : {
                          ...td,
                          complete: !td.complete,
                          dateCompleted: action.dateCompleted,
                      }
            );
        case "ACT_DELETE_TODO":
            return state.filter((td) => td._id !== action._id);
        case "ACT_FETCH_TODO":
            console.log(
                "action: ACT_FETCH, todos: ",
                JSON.stringify(action.todo)
            );
            return action.todo;
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todo: todoReducer(state.todo, action),
    };
}
