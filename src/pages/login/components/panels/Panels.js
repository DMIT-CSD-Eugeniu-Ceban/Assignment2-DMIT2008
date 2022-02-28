import React from 'react';

import { IoChevronForward } from 'react-icons/io5'


import { PanelColor, PanelNavbar, PanelRootFolder} from './styles'
/* import { PanelButton } from './../../../../ui/mainPanelButton' */
import { PanelFrame, TopFramePanel, CenterFramePanel, BottomFramePanel } from './../../../../ui/mainPanel'

/* import Image from './../../../../static/404.gif' */


function Panels(props) {
    return (
        <PanelColor bgcolor="#FAFAFA">
            <div>
                <div>
                    <h2 style={{ fontFamily: 'Rockwell', fontSize: 35, color: '#FF7043' }}>Authentication</h2>
                </div>

                <PanelNavbar>
                    <PanelRootFolder>
                        <a href="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-admin/index.html">
                            Home
                        </a>
                        <IoChevronForward style={{fontSize: "1em", marginLeft: 10, marginRight: 7}} />
                        <p>Authentication</p>
                    </PanelRootFolder>
                </PanelNavbar>

                
                <PanelFrame>
                    <TopFramePanel>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#757575'}}>Login Page</h2>
                    </TopFramePanel>
                    
                    <CenterFramePanel ></CenterFramePanel>

                    <BottomFramePanel/>
                </PanelFrame>
            </div>
        </PanelColor>
    );
}

export default Panels;