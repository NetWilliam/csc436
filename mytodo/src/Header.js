import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-navi";

export default function Header({ text }) {
    return (
        <Link href="/">
            <Navbar.Brand>{text}</Navbar.Brand>
        </Link>
    );
}
