import styled from 'styled-components'

export const Card = styled.div`
width: 30rem;
height: 30rem;
margin: 2rem;
transition: var(--normal-transition);
cursor: pointer;
border-radius: 2rem;
background: ${props => props.theme.card};
user-select: none;

a{
    width: 100%;
    font-size: clamp(18px, 1.8rem, 100px);

    :hover{
        color: #996dff;
    }
}
`
export const CardImage = styled.div`
width: 100%;
height: 50%;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem 2rem 0  0;
}
`
export const CardContent = styled.div`
width: 90%;
margin: 0 auto;
height: 50%;

h1{
text-align: center;
font-size: clamp(14px, 1.7rem, 100px);
}

h2{
text-align: center;
color: #996dff;
font-size: clamp(12px, 1.5rem, 100px);
}

p{
text-align: justify;
font-size: clamp(12px, 1.4rem, 100px);
}
`