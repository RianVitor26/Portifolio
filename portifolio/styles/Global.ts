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
    --text-dark: black;
    --text-white: white;
    --body-bg-white: white;
    --body-bg-dark: #000000;
    --nav-dark: #eceff1;
    --nav-white: #1b1b1b;
    --link-dark: black;
    --link-white: white;
}

html{
    font-size: 62.5%;
}

body{
    background: ${props => props.theme.body}
}
`