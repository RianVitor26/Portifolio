import { createGlobalStyle } from "styled-components";

interface themeProps { 
    theme: {
        body: string
    }
}

export const GlobalStyle = createGlobalStyle<themeProps>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root{
    --text-dark: #000a12;
    --text-white: #eceff1;
    --body-bg-white: #f5f5f5;
    --body-bg-dark: #000000;
    --nav-dark: #eceff1;
    --nav-white: #0d0d0d;
    --link-dark: #000a12;
    --link-white: #eceff1;
    --card-white: #e0e0e0;
    --card-dark: #0d0d0d;
    --menu-white: #e0e0e0;
    --menu-dark: #000a12;
    --normal-transition: all ease .5s;
}

html{
    font-size: 62.5%;
}

body{
    background: ${props => props.theme.body};
}
`