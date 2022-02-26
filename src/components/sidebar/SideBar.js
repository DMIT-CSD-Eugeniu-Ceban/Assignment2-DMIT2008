import React from 'react';

import { IoGridOutline, IoChevronForward, IoPeopleSharp, IoPeopleCircleOutline } from 'react-icons/io5'

import { SideBarSection } from './../../ui/sideBarButton'
import { SidebarContainer} from './../../ui/sideContainer'
import { Sections, H3 } from './styles'



function SideBar(props) {
    return (
        <Sections>
            <SidebarContainer>
                <SideBarSection>
                    <div style={{ display: 'flex' }}>
                        <IoGridOutline size= "1.4rem"/>
                        <H3>DASHBOARD</H3>
                    </div>
                    {/* <div>
                        <IoChevronForward />
                    </div> */}
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: '0.5rem'}}>
                    <div style={{ display: 'flex' }}>
                        <IoPeopleSharp size="1.4rem"/>
                        <H3>VENDORS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection>
                    <div style={{ display: 'flex' }}>
                        <IoPeopleCircleOutline size="1.4rem" />
                        <H3>USERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <div>
                <span>Categories</span>
                <span>Products</span>
                <span>Orders</span>
                <span>Reviews</span>
                <span>Brands</span>
            </div>

            <div>
                <span>Authentication</span>
                <span>Icons</span>
                <span>Other Pages</span>
            </div>
        </Sections>
    )
}

export default SideBar;