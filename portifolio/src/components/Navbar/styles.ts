import styled from 'styled-components'

export const Container = styled.nav`
width: 100%;
height: 10vh;
display: flex; 
justify-content: center;
align-items: center;

ul{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
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
          background: linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%);
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
