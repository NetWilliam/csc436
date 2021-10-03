/*
 * Logout.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'

export default function Logout({user="bobo", dispatch}) {
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: "ACT_LOGOUT"})}}>
            Logged in as: <b>{user}</b><br/>
            <input type="submit" value="Logout"/>
        </form>
    )
}
