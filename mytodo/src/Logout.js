/*
 * Logout.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React, {useContext} from 'react'
import {StateContext} from './Contexts'


export default function Logout() {
    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    return (
        state.user &&
        <form onSubmit={e => {e.preventDefault(); dispatch({type: "ACT_LOGOUT"})}}>
            Logged in as: <b>{user}</b><br/>
            <input type="submit" value="Logout"/>
        </form>
    )
}
