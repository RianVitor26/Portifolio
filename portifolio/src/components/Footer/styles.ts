import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

export const Footer = styled.footer`
width: 100%;
background: ${props => props.theme.card};
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 2rem;

p, span{
    font-size: clamp(18px, 1.5rem, 100px);
}

img{
    width: 5rem;
    height: 5rem;
    margin: 0 2rem;

    @media only screen and (max-width: 600px) {
        width: 3rem;
        height: 3rem;
    }
}
`

export const MediasContainer = styled.div`
display: flex;
align-items: center;
margin: 4rem 5rem;
`
export const Media = styled.div`
a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const Powered = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
    animation: ${rotate} 20s linear;
}
`
