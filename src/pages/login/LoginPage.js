
import React from 'react';
import { Link, useNavigate } from "react-router-dom"

import logo from './../../static/logo.png'
import backgroundImage from './../../static/picture1.jpg';
import loginImage from './../../static/login.png'
import avatar from './../../static/avatar.png'

import { Container } from './styles'



/* import { AppBar } from './components/appbar'
import { Panels } from './components/panels'
import { SideBar } from './components/sidebar' */

function LoginPage(props) {

    let navigate = useNavigate()

    function onSignInHandler(e) {
        e.preventDefault();
        navigate('/dashboard')
    }

    return (
        <>
            {/* <div>
            <ul>
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
            </form>
        </div> */}
        {/* ----------------------------------------------------------------------------- */}


            <div style={{ background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', alignItems: 'center', minHeight:'600px', minWidth: '600px' }} >

                <Container>
                    <div>
                        <span><img src={logo} width='60' style={{ margin: '1rem 0 1rem 1rem', position:'absolute', left:'0.5rem', top: '0.5rem'}} alt="company logo" /></span>
                        <img className='picture' src={loginImage} width='700px' style={{padding:'1rem '}} alt="Sing in logo" />
                    </div>

                    
                    <div className='loginSection'>
                        <p className='header'>Login</p>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem'}}>
                            <span><img src={avatar} width='80' style={{position: 'static'}} alt="company logo"/></span>
                        </div>

                        <form action="post">
                            <div>
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="User email" required />

                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Password" required />
                            </div>

                            <div>
                                <div>
                                    <label class="checkbox-wrap checkbox-primary">Remember Me
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>

                                <div>
                                    <spnan><a href="#">Forgot Password</a></spnan>
                                </div>
                            </div>
                            <div>
                                <button type="submit">Sign In</button>
                                <button type="submit">Sign Up</button>
                            </div>
                            <div>
                                <spnan>
                                    <img src="" alt="facebook" />
                                </spnan>
                                <spnan>
                                    <img src="" alt="Gmail" />
                                </spnan>
                                <spnan>
                                    <img src="" alt="LinkIn" />
                                </spnan>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>







            {/* <AppBar />
            <div style={{ display: "flex" }}>
                <SideBar />
                <Panels />
            </div> */}

        </>
    )
}


export default LoginPage