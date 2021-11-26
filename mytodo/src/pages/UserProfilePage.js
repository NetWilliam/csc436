import React, { useEffect, useContext } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";
import UserProfilelist from "../UserProfilelist";
import { Link } from "react-navi";

export default function UserProfilePage({ id }) {
    console.log(`in UserProfilePage: id: ${id}`);
    const [user, getUser] = useResource(() => ({
        url: `/user/${id}`,
        method: "get",
        //headers: { Authorization: `${state.user.access_token}` },
    }));

    useEffect(getUser, []);
    const { data, isLoading } = user;
    if (user && user.isLoading == false) {
        return (
            <>
                {console.log(
                    "in userprofilepage.js user: " + JSON.stringify(data)
                )}
                {data ? <UserProfilelist user={data} /> : "Loading..."}
                <div>
                    <Link href="/">Go back</Link>
                </div>
            </>
        );
    } else {
        return <>...</>;
    }
}
