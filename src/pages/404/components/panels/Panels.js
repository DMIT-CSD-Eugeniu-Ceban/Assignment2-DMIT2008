import React from 'react';

import { IoChevronForward, IoAddOutline } from 'react-icons/io5';


import { PanelColor, PanelNavbar, PanelRootFolder } from './styles';
/* import { PanelButton } from './../../../../ui/mainPanelButton' */
import image from './../../../../static/disconnection.gif'

import { PanelFrame, TopFramePanel, CenterFramePanel, BottomFramePanel } from './../../../../ui/mainPanel';


function Panels(props) {
    return (
        <PanelColor bgcolor="#FAFAFA">
            <div>
                <div>
                    <h2 style={{ fontFamily: 'Rockwell', fontSize: 35, color: '#FF7043' }}>Page Not Found . . .</h2>
                </div>

                <PanelNavbar>
                    <PanelRootFolder>
                        <a href="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-admin/index.html">
                            Home
                        </a>
                        <IoChevronForward style={{ fontSize: "1em", marginLeft: 10, marginRight: 7 }} />
                        <p>Contact Us</p>
                    </PanelRootFolder>

                    {/* <span>
                        <PanelButton><IoAddOutline style={{ marginRight: 7}}/>Add Product</PanelButton>
                    </span> */}
                </PanelNavbar>

                <PanelFrame>
                    <TopFramePanel>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#757575' }}>Oops !</h2>
                    </TopFramePanel>

                    <CenterFramePanel style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1f3557'}}>
                        <img src={image} style={{width: '66rem' }} alt="" />
                        {/* <span ><img src='https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif' alt='404 page not found' /></span> */}
                    </CenterFramePanel>
                   <BottomFramePanel/>
                </PanelFrame>
            </div>
        </PanelColor>
    );
}

export default Panels;