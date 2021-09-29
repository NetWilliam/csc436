/*
 * Registration.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'

export default function Registration() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            fill in the form to regist.
            <label htmlFor="login-username"> Username: </label>
            <input type="text" name="login-username" id="login-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password"/>
            <label htmlFor="rpt-login-password">Repeat Password:</label>
            <input type="password" name="rpt-login-password" id="rpt-login-password"/>
            <intput type="submit" value="Login" />
        </form>
    )
}
