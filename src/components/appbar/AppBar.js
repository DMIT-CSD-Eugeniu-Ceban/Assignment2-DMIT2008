import React from 'react';
import logo from './../../static/logo.png'

import { IoEllipsisVertical, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5'

import { AppBarLogoStyle, AppBarLogo, AppBarButton, AppBarIcons, AppBarIcon } from './styles'

function AppBar(props) {
    return (
        <AppBarLogoStyle bgcolor="#ECEFF1" color="#424242">
            <AppBarLogo>
                <span><img src={logo} width='60' style={{ margin: '1rem 0 1rem 1rem'}} alt="company logo" /></span>
                <h1 style={{ fontSize: "2rem", fontWeight: 'bold', padding:'0 4rem 0 1rem'} }>EC</h1>
            </AppBarLogo>
            <AppBarIcons>
                <AppBarIcon>
                    <span><AppBarButton>sign out</AppBarButton></span>
                    <span><IoMailOutline size='1.5rem' /></span>
                    <span><IoNotificationsOutline size='1.5rem' /></span>
                    <span><img src='https://avatars.dicebear.com/api/initials/eugeniu%20ceban.svg?b=%23ef7534&r=50&scale=104' width='35' alt='Avatar' /></span>
                    <span><IoEllipsisVertical size='1.2rem' /></span>
                </AppBarIcon>
            </AppBarIcons>
        </AppBarLogoStyle>
    );
}

export default AppBar;