export const lightTheme = {
    body: 'var(--body-bg-white)',
    fontColor: 'var(--text-dark)',
    nav: 'var(--nav-dark)',
    link: 'var(--link-dark)',
}
export const darkTheme = {
    body: 'var(--body-bg-dark)',
    fontColor: 'var(--text-white)',
    nav: 'var(--nav-white)',
    link: 'var(--link-white)',

}

import styled from 'styled-components'

export const ThemeContainer = styled.div`
color: ${props => props.theme.fontColor};

nav{
background: ${props => props.theme.nav};
}

a{
color: ${props => props.theme.link};
} 
`