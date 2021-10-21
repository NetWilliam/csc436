/*
 * Registration.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useState, useContext, useEffect} from 'react'
import {useResource} from 'react-request-hook'
import {StateContext} from './Contexts'

export default function Registration() {
    const {state, dispatch} = useContext(StateContext)
    /*
    const [username, setUsername] = useState('')
    const [pswd, setPswd] = useState('')
    const [repeatPwsd, setRepeatPswd] = useState('')
    */
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: "",
    })
    const [user, register] = useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: {username, password}
    }))
    useEffect(() => {
        if (user && user.data) {
            dispatch({type: 'ACT_REGIST', username: user.data.username})
        }
    }, [user])
    return (
        !state.user &&
        <div>
            <form onSubmit={e => {e.preventDefault(); register(formData.username, formData.password);}}>
                fill in the form to regist.
                <br/>
                <label htmlFor="reg-username"> Username: </label>
                <input type="text" name="reg-username" id="reg-username" onChange={e => setFormData({...formData, username: e.target.value})}/>
                <br/>
                <label htmlFor="reg-password">Password:</label>
                <input type="password" name="reg-password" id="reg-password" onChange={e => setFormData({...formData, password: e.target.value})}/>
                <br/>
                <label htmlFor="rpt-reg-password">Repeat Password:</label>
                <input type="password" name="rpt-reg-password" id="rpt-reg-password" onChange={e => setFormData({...formData, passwordRepeat: e.target.value})}/>
                <br/>
                {/*<input type="submit" value="Regist" disable={pswd != repeatPwsd}/>*/}
                <button type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password != formData.passwordRepeat}>Regist</button>
            </form>
        </div>
    )
}
