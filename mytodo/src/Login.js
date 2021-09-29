/*
 * Login.js
 * Copyright (C) 2021  <@LAPTOP-9POC3RUN>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'

export default function Login() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="login-username"> Username: </label>
            <input type="text" name="login-username" id="login-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password"/>
            <intput type="submit" value="Login" />
        </form>
    )
}
