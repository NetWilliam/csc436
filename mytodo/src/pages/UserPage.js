import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import Userlist from "../Userlist";
import { Link } from "react-navi";

export default function UserPage() {
    const { state, dispatch } = useContext(StateContext);
    const [users, getUsers] = useResource(() => ({
        url: "/user",
        method: "get",
        headers: { Authorization: `${state.user.access_token}` },
    }));

    useEffect(getUsers, []);
    /*
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            console.log("users are loaded: " + JSON.stringify(users.data));
        }
    }, [users]);
    */
    const { data, isLoading } = users;
    if (users && users.isLoading == false) {
        return (
            <>
                {console.log("in userpage.js user: " + JSON.stringify(data))}
                {data && data.user ? (
                    <Userlist users={data.user} />
                ) : (
                    "Loading..."
                )}
                <div>
                    <Link href="/">Go back</Link>
                </div>
            </>
        );
    } else {
        return <>...</>;
    }
}
