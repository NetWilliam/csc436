/*
 * Login.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState, useContext} from 'react'
import {StateContext} from './Contexts'

export default function Login() {
    const {state, dispatch} = useContext(StateContext)
    const [username, setUsername] = useState('')
    const [pswd, setPswd] = useState('')
    return (
        !state.user &&
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'ACT_LOGIN', username: username, password: pswd})}}>
            <label htmlFor="login-username"> Username: </label>
            <input type="text" name="login-username" id="login-username" onChange={e => setUsername(e.target.value)}/>
            <br/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" onChange={e => setPswd(e.target.value)}/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
    )
}
