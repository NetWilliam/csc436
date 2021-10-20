import logo from './logo.svg';
import './App.css';
//import Todo from './Todo'
import TodoList from './Todolist'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'
import appReducer from './reducers'
import { useState, useReducer, useEffect } from 'react'
import { useResource } from 'react-request-hook'


import {StateContext} from './Contexts'

function App() {
    //const [state, dispatch] = useReducer(appReducer, {user: '', todo: todos})
    const [state, dispatch] = useReducer(appReducer, {user: '', todo: []})

    const [todos, getTodos] = useResource(() => ({
        url: '/todos',
        method: 'get',
    }))
    useEffect(getTodos, [])
    useEffect(() => {
        //console.log('todos: ' + JSON.stringify(todos))
        if (todos && todos.data) {
            dispatch({type: "ACT_FETCH_TODO", todos: todos.data});
        }
    }, [todos])

    return (
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
            <div className="Root">
                {/*
                {!state.user && <><Login dispatch={dispatch}/><hr/></>}
                {!state.user && <><Registration dispatch={dispatch}/><hr/></>}
                {state.user && <><Logout user={state.user} dispatch={dispatch}/><hr/></>}
                {state.user && <><CreateTodo user={state.user} dispatch={dispatch}/><hr/></>}
                {state.todo && <><TodoList todos={state.todo} dispatch={dispatch}/></>}
                */}
                <Login/>
                <Registration/>
                <Logout/>
                <CreateTodo/>
                <TodoList/>
            </div>
        </StateContext.Provider>
    )
}
export default App;
