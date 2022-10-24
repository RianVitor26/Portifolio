import styled from 'styled-components';

export const Menu = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background: ${props => props.theme.menu};
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-width: 427px){
    display: none;
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`