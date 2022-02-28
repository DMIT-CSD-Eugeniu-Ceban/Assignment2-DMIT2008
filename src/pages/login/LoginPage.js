import React from 'react';

import { Link, useNavigate } from "react-router-dom"

import { AppBar } from './components/appbar'
import { Panels } from './components/panels'
import { SideBar } from './components/sidebar'

function LoginPage(props) {

    let navigate = useNavigate()

    function onSignInHandler(e) {
        e.preventDefault();
        navigate('/dashboard')
    }

    return (
        <>
            {/* <ul>
                <h1 style={{ color: 'red' }}>LOGIN PAGE</h1>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>

            <header>
                <h1>Login Page</h1>
            </header>

            
            <form onSubmit={onSignInHandler}>
                <input type="text" />
                <button>sign in</button>
            </form> */}

            <AppBar />
            <div style={{ display: "flex" }}>
                <SideBar />
                <Panels />
            </div>

        </>
    )
}


export default LoginPage