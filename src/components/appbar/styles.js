import styled from 'styled-components';

const AppBarLogoStyle = styled.nav`
    box-shadow: 0 0 2px 1.5px #A1887F;
    padding-right: 1.2rem;
    background-color: ${props => props.bgcolor || "tomato"};
    color: ${props => props.color || "pink"};
    display: flex;
    justify-content: space-between;
`


const AppBarLogo = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #78909C;
`


const AppBarButton = styled.span`
    cursor: pointer;
    font-weight: 650;
    color: #616161;
    border: unset;
`


const AppBarIcons = styled.div`
    display: flex;
    `
const AppBarIcon = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 13rem;

`



export { AppBarLogoStyle, AppBarLogo, AppBarButton, AppBarIcons, AppBarIcon }