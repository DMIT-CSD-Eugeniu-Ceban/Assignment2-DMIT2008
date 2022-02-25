import React from 'react';
import { AppBar } from './../components/appbar'
import { Panels } from './../components/panels'
import {SideBar} from './../components/sidebar'


function DashBoardPage(props) {
    return ( 
        <>
            <AppBar />
            <SideBar/>
            <Panels />
        </>	
     );
}

export default DashBoardPage;


