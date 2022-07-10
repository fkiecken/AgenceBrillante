import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../../utils/hooks'

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColorBody } = useTheme(theme)

  const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  h1 {
    color: #a0cecb;
    padding-top: 20px;
    padding-left: 20px;
  }

  body {
    background-color: ${backgroundColorBody};
  }
`

  return <GlobalStyle />
}

export default GlobalStyle
