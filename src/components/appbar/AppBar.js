import React from 'react';
import logo from './../../static/logo.png'

import { IoEllipsisVertical, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5'

import { } from './styles'

function AppBar(props) {
    return (
        <span>
            <div>
                <div>
                    <span><img src={logo} alt="company logo" /></span>
                    <h1>EC</h1>
                </div>
                <div>
                    <ul>
                        <span><button>sign out</button></span>
                        <span><IoMailOutline size='1.5rem' /></span>
                        <span><IoNotificationsOutline size='1.5rem' /></span>
                        <span><img src='https://avatars.dicebear.com/api/initials/eugeniu%20ceban.svg?b=%23ef7534&r=50&scale=104' width='40' alt='Avatar' /></span>
                        <span><IoEllipsisVertical size='1.5rem' /></span>
                    </ul>
                </div>
            </div>
        </span>
    );
}

export default AppBar;