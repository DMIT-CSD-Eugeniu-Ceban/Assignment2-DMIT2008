import React from 'react';
import { AppBar } from './../components/appbar'
import { Panels } from './../components/panels'
import { SideBar } from './../components/sidebar'


function DashBoardPage(props) {
    return (
        <>
            <AppBar />
            <div style={{ display: "flex" }}>
                <SideBar />
                <Panels />
            </div>
        </>
    );
}

export default DashBoardPage;


