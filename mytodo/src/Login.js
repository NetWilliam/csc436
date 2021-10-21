/*
 * Login.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState, useContext, useEffect} from 'react'
import {useResource} from 'react-request-hook'
import {StateContext} from './Contexts'

export default function Login() {
    const {state, dispatch} = useContext(StateContext)
    const [username, setUsername] = useState('')
    const [pswd, setPswd] = useState('')
    const [user, login] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))
    const [loginFailed, setLoginFailed] = useState(false)
    useEffect(() => {
        if (user && user.data) {
            if(user.data.length > 0) {
                setLoginFailed(false)
                dispatch({type: 'ACT_LOGIN', username: user.data[0].username})
            } else {
                setLoginFailed(true)
            }
        }
    }, [user])
    return (
        !state.user &&
        <form onSubmit={e => {e.preventDefault(); login(username, pswd);}}>
            <label htmlFor="login-username"> Username: </label>
            <input type="text" name="login-username" id="login-username" onChange={e => setUsername(e.target.value)}/>
            <br/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" onChange={e => setPswd(e.target.value)}/>
            <br/>
            <input type="submit" value="Login"/>
            {loginFailed && <label color="red">login failed, check username and password!</label>}
        </form>
    )
}
