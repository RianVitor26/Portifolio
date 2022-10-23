import styled from 'styled-components'

export const Container = styled.div`
width: 70%;
height: 100%;
margin: 0 auto;
display: flex; 
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
margin-bottom: 10rem;

@media only screen and (max-width: 500px){
    width: 95%;
}
`