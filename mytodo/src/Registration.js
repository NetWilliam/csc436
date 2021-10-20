/*
 * Registration.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState, useContext} from 'react'
import {StateContext} from './Contexts'

export default function Registration() {
    const {state, dispatch} = useContext(StateContext)
    const [username, setUsername] = useState('')
    const [pswd, setPswd] = useState('')
    const [repeatPwsd, setRepeatPswd] = useState('')
    return (
        !state.user &&
        <div>
            <form onSubmit={e => {e.preventDefault(); dispatch({type: "ACT_REGIST", username: username})}}>
                fill in the form to regist.
                <br/>
                <label htmlFor="reg-username"> Username: </label>
                <input type="text" name="reg-username" id="reg-username" onChange={e => setUsername(e.target.value)}/>
                <br/>
                <label htmlFor="reg-password">Password:</label>
                <input type="password" name="reg-password" id="reg-password" onChange={e => setPswd(e.target.value)}/>
                <br/>
                <label htmlFor="rpt-reg-password">Repeat Password:</label>
                <input type="password" name="rpt-reg-password" id="rpt-reg-password" onChange={e => setRepeatPswd(e.target.value)}/>
                <br/>
                <input type="submit" value="Regist" />
            </form>
        </div>
    )
}
