import styled from 'styled-components'

export const Container = styled.nav`
width: 100%;
height: 10vh;
display: flex; 
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 101;
margin-bottom: 5rem;

svg{
  position: absolute;
  left: 20px;
  color: #996dff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1000;

  @media only screen and (min-width: 426px) {
    display: none;
  }
}

ul{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;

     @media only screen and (max-width: 426px) {
    display: none;
  }
}

li{
    list-style-type: none;
}

a{
    text-decoration: none;
    position: relative;
    padding-bottom: 1vh;
    font-size: clamp(14px, 1.6rem, 100px);

    ::before {
          content: "";
          position: absolute;
          width: 100%;
          height: .5vh;
          bottom: 0;
          left: 0;
          background: #996dff;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
        :hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
}
`
