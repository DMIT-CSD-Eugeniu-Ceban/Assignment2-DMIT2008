import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    min-width: 910px;
    width: calc(100% / 1.7);
    //min-height: '650px';
    //height: 80%;
    min-height: 39rem;
    height: calc(80% - 8rem);  /* Need to check if I should to modify something*/
    margin: 0 auto;
    border: 1px solid 808080;
    border-radius: 8px; 
    box-shadow: 7px 6px 6px 0px rgba(122,122,122,0.63); 
    background: linear-gradient(135deg, #A45856 0%, #9BCBCA 68%, #FFB997 100%);
    align-items: center;
    justify-content:space-around;
    position: relative;
    padding: 1rem;

    
    .loginSection{
        box-shadow: 4px 4px 4px 2px rgba(124,124,124,0.38);
        border: 1px solid silver;
        border-radius: 5px;
        min-width: 300px;
        width: calc(34% - 5rem) /* Here I can adjust the width of the login cell */
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    

    .header{
        font-family: 'Pacifico', cursive;
        font-size: 2rem;
        color: #B9548D;
        text-align:center;
        padding: 2rem 0;
    }




    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        height: calc(100% / 1.12);
     }

    
`






export { Container }