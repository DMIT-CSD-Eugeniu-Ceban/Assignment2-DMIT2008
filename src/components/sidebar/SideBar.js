import React from 'react';

import { IoGridOutline, IoChevronForward, IoPeopleSharp, IoPeopleCircleOutline, IoFileTrayStackedOutline, IoLibrarySharp, IoCart, IoStarHalf, IoPricetags, IoLogInOutline, IoCubeSharp, IoCopyOutline } from 'react-icons/io5'

import { SideBarSection } from './../../ui/sideBarButton'
import { SidebarContainer } from './../../ui/sideContainer'
import { Sections, H3 } from './styles'



function SideBar(props) {
    return (
        <Sections>
            <SidebarContainer>
                <SideBarSection>
                    <div style={{ display: 'flex' }}>
                        <IoGridOutline size="1.4rem" />
                        <H3>DASHBOARD</H3>
                    </div>
                    {/* <div>
                        <IoChevronForward />
                    </div> */}
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoPeopleSharp size="1.4rem" />
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

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoFileTrayStackedOutline size="1.4rem" />
                        <H3>CATEGORIES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoLibrarySharp size="1.4rem" />
                        <H3>PRODUCTS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoCart size="1.4rem" />
                        <H3>ORDERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoStarHalf size="1.4rem" />
                        <H3>REVIEWS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoPricetags size="1.4rem" />
                        <H3>BRANDS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoLogInOutline size="1.4rem" />
                        <H3>AUTHENTICATE</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoCubeSharp size="1.4rem" />
                        <H3>ICONS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex' }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>OTHER PAGES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>


            </SidebarContainer>

            <SidebarContainer style={{borderBottomWidth: '0' }}>
                <SideBarSection style={{ marginBottom: '1rem', marginTop: '0.8rem'}}>
                    <div style={{ display: 'flex' }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>CONTACT US</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

        </Sections>
    )
}

export default SideBar;