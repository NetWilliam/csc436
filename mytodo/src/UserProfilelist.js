import React, { useContext, useEffect } from "react";
import User from "./User";
import { StateContext } from "./Contexts";
import { useResource } from "react-request-hook";
import Todo from "./Todo";

export default function UserProfilelist({ user }) {
    return (
        <div>
            {console.log(
                "in userprofilelist.js user: " + JSON.stringify(user) + ""
            )}
            {user && user.todos && user.todos.length ? (
                user.todos.map((td, i) => (
                    <div key={"user-profile-" + i}>
                        {console.log(
                            `td in UserProfilelist.js: ${JSON.stringify(td)}`
                        )}
                        <Todo {...td} />
                        <br />
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}
