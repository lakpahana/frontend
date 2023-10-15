import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> :
                            <Login />

                    } />
                    <Route path="/logout" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Login />
                    } />

                    <Route path="/register" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Register />
                    } />
                </Routes>
            </Router>
        </div>

    );
};

export default App;
