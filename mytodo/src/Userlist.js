/*
 * Userlist.js
 * Copyright (C) 2021 liuweibo <liuweibo@Ubuntu-WSL2>
 *
 * Distributed under terms of the MIT license.
 */

import React, { useContext, useEffect } from "react";
import User from "./User";
import { StateContext } from "./Contexts";
import { useResource } from "react-request-hook";

export default function Userlist({ users }) {
    return (
        <div>
            {console.log("in userlist.js user: " + JSON.stringify(users))}
            {users.length ? (
                users.map((td, i) => (
                    <div key={"user-" + i}>
                        <User {...td} />
                        <br />
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}
