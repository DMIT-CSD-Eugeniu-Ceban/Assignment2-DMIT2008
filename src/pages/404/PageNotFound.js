import React from 'react';

import { Link } from 'react-router-dom'

import { AppBar } from './components/appbar'
import { Panels } from './components/panels'
import { SideBar } from './components/sidebar'

function PageNotFound(props) {
    return (
        <>
        {/*     <h1 style={{ color: 'red' }}>ERROR 404</h1>    
        
        <ul>
            <li>
                <Link to="/">back to saftey</Link>
            </li>
            </ul>
            
        <header>
            <h1>404</h1>
        </header> */}
            
        <AppBar />
        <div style={{ display: "flex" }}>
            <SideBar />
            <Panels />
        </div>


        </>
    )
}


export default PageNotFound