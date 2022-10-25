import styled from 'styled-components'

export const Container = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

h1{
    font-size: clamp(14px, 1.8rem, 100px);
}

p{
    text-align: justify;
}
`

export const About = styled.div`
width: 40rem;
margin-bottom: 20rem;

@media only screen and (max-width: 440px){
    width: 100%;
}

h1{
    font-size: clamp(14px, 1.8rem, 100px);
    color: #996dff;
}

p{
    font-size: clamp(14px, 1.5rem, 100px);
    padding-bottom: 1rem;

    span{
        color: #996dff;
        font-weight: 700;
    }

    a{
            color: slateblue;
        }
}
`
export const Technologies = styled.div`
width: 50rem;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
margin-bottom: 10rem;

h2{
    font-size: clamp(12px, 1.7rem, 100px);
}

@media only screen and (max-width: 490px){
    width: 100%;
}
`
export const Stack = styled.div`
display: flex;
margin: 5rem 2rem;
flex-direction: column;
align-items: center;
justify-content: center;


img{
    width: 5rem;
    height: 5rem;
}
`
