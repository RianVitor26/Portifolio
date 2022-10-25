import styled, { keyframes } from 'styled-components';

const handBounce = keyframes`
from{
    transform: rotate(0)
}

50%{
    transform: rotate(-30deg);
}
90%{
    transform: rotate(-1deg);
}
`

export const Container = styled.div`
position: fixed;
bottom: 2rem;
left: 2rem;


button{
    height: 30px;
    cursor: pointer;
     background: transparent;
     border: none;
     padding: 30px;
     font-size: clamp(12px, 1.6rem, 100px);
     font-weight: 'Roboto';
     color: #996dff;
     font-weight: 700;

     img{
        width: 2rem;
        height: 2rem;
        animation: ${handBounce} .5s ease 2s infinite backwards;
     }
}
`