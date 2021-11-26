import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import CreateTodo from "./CreateTodo";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";
import appReducer from "./reducers";
import { useState, useReducer, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "./Contexts";
import { Router, View } from "react-navi";
import { mount, route } from "navi";
import { Container } from "react-bootstrap";
import TodoPage from "./pages/TodoPage";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
    const [state, dispatch] = useReducer(appReducer, { user: {}, todo: [] });

    const routes = mount({
        "/": route({ view: <HomePage /> }),
        "/todo/create": route({ view: <CreateTodo /> }),
        "/todo/:id": route((req) => {
            return { view: <TodoPage id={req.params.id} /> };
        }),
        "/user": route({ view: <UserPage /> }),
        "/user/:userId": route((req) => {
            return {
                view: <UserProfilePage id={req.params.userId} />,
            };
        }),
    });

    return (
        <div>
            <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
                <div className="Root">
                    <Router routes={routes}>
                        <Container>
                            <HeaderBar />
                            <hr />
                            <View />
                        </Container>
                    </Router>
                </div>
            </StateContext.Provider>
        </div>
    );
}

export default App;
