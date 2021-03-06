import React from 'react';

import { IoChevronForward, IoAddOutline } from 'react-icons/io5'

import { PanelColor, PanelNavbar, PanelRootFolder} from './styles'
import { PanelButton } from './../../ui/mainPanelButton'
import { PanelFrame, TopFramePanel, CenterFramePanel, BottomFramePanel} from './../../ui/mainPanel'

function Panels(props) {
    return (
        <PanelColor bgcolor="#FAFAFA">
            <div>
                <div>
                    <h2 style={{ fontFamily: 'Rockwell', fontSize: 35, color: '#FF7043' }}>Products</h2>
                </div>

                <PanelNavbar>
                    <PanelRootFolder>
                        <a href="#top">
                            Home
                        </a>
                        <IoChevronForward style={{fontSize: "1em", marginLeft: 10, marginRight: 7}} />
                        <p>Product</p>
                    </PanelRootFolder>

                    <span>
                        <PanelButton><IoAddOutline style={{ marginRight: 7}}/>Add Product</PanelButton>
                    </span>
                </PanelNavbar>

                
                <PanelFrame>
                    <TopFramePanel>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#757575'}}>Product Listings</h2>
                    </TopFramePanel>

                    <CenterFramePanel></CenterFramePanel>

                    <BottomFramePanel></BottomFramePanel>
                </PanelFrame>
            </div>
        </PanelColor>
    );
}

export default Panels;