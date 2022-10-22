export const lightTheme = {
    body: '#fff',
    fontColor: '#000'
}
export const darkTheme = {
    body: '#000',
    fontColor: '#fff'
}

import styled from 'styled-components'

export const Container = styled.div`
color: ${props => props.theme.fontColor}
`