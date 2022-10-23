import styled from 'styled-components'

export const Container = styled.div`
width: 70%;
height: 90vh;
margin: 0 auto;
display: flex; 
flex-direction: column;
align-items: center;

span{
  color: #996dff;
}

h1{
font-size: clamp(16px, 2.5rem, 100px);
padding-top: 1rem;
}

h2{
  font-size: clamp(14px, 1.5rem, 100px);
  color: #996dff;
}

h3{
  font-size: clamp(12px, 1.4rem, 100px);
  padding-top: 1rem;
  word-wrap: break-word;
  text-align: justify;
}

@media only screen and (max-width: 769px) {
  width: 80%;
}

@media only screen and (max-width: 500px) {
  width: 95%;
}
`
export const Perfil = styled.div`
margin-top: 3rem;
width: 20rem;
height: 20rem;
border-radius: 50%;
background-image: url("Rian.png");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
border: .5rem solid #996dff;

@media only screen and (max-width: 769px) {
 width: 17rem;
height: 17rem;
}
`

export const Resume = styled.div`
width: 40%;

@media only screen and (max-width: 769px) {
  width: 60%;
}

@media only screen and (max-width: 426px) {
  width: 80%;
}
`
