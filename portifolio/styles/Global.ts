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
}

:root{
    --text-dark: black;
    --text-white: white;
    --body-bg-white: white;
    --body-bg-dark: black;
}

body{
    background: ${props => props.theme.body}
}
`