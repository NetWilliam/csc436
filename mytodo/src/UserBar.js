import React, { useContext, useState } from "react";
import Registration from "./Registration";
import Login from "./Login";
import Logout from "./Logout";

import { StateContext } from "./Contexts";
import { Button } from "react-bootstrap";

export default function UserBar() {
    const { state } = useContext(StateContext);

    const [showLogin, setShowLogin] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);

    if (state.user.username) {
        return <Logout />;
    } else {
        return (
            <div className="justify-content-end">
                <Button variant="link" onClick={(e) => setShowLogin(true)}>
                    Login
                </Button>
                <Login
                    show={showLogin}
                    handleClose={(e) => setShowLogin(false)}
                />
                <Button
                    variant="link"
                    onClick={(e) => setShowRegistration(true)}
                >
                    Registration
                </Button>
                <Registration
                    show={showRegistration}
                    handleClose={() => setShowRegistration(false)}
                />
            </div>
        );
    }
}
