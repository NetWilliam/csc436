import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import TodoList from './Todolist'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'
import appReducer from './reducers'
import { useState, useReducer, useEffect } from 'react'

function App() {
    const todos = [
        {
            uuid: "24641079-5887-41ea-82b5-b432815e5203",
            title: "eat breakfast",
            description: "egg, milk, bread",
            dateCreated: "2021/09/28 9:30",
            complete: true,
            dateCompleted: "2021/09/28 10:00",
        },
        {
            uuid: "9806d06b-271e-48da-9551-92e1d1072703",
            title: "eat lunch",
            description: "rice, chicken, milk, fried broccoli",
            dateCreated: "2021/09/28 12:00",
            complete: true,
            dateCompleted: "2021/09/28 13:00"
        },
        {
            uuid: "661ceda2-81f7-4249-8235-a1f7ca901ee7",
            title: "eat dinner",
            description: "noodle, grilled steak",
            dateCreated: "2021/09/28 19:00",
            complete: false,
            dateCompleted: ""
        },
    ]
    const [state, dispatch] = useReducer(appReducer, {user: '', todo: todos})
    return (
        <div className="Root">
            {!state.user && <><Login dispatch={dispatch}/><hr/></>}
            {!state.user && <><Registration dispatch={dispatch}/><hr/></>}
            {state.user && <><Logout user={state.user} dispatch={dispatch}/><hr/></>}
            {state.user && <><CreateTodo user={state.user} dispatch={dispatch}/><hr/></>}
            {state.todo && <><TodoList todos={state.todo} dispatch={dispatch}/></>}
        </div>
    )
}
export default App;
