import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
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
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#585858' : 'white')}
  }
`

  return <GlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
