/*
 * Login.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState} from 'react'

export default function Login({dispatch}) {
    const [username, setUsername] = useState('')
    const [pswd, setPswd] = useState('')
    return (
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
