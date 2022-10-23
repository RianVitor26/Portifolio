import styled from 'styled-components'

export const Container = styled.div`
width: 70%;
height: 90vh;
margin: 0 auto;
display: flex; 
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;

@media only screen and (max-width: 500px){
    width: 95%;
}
`