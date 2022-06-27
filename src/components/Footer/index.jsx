import { useContext } from 'react'
import StyledComponent from 'styled-components'
import { ThemeContext } from '../../utils/context'

const FooterContainer = StyledComponent.div`
width: 100%;
height: 120px;
background: ${({ isDarkMode }) =>
  isDarkMode === 'light'
    ? 'linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(252,252,252,1) 100%)'
    : 'linear-gradient(180deg, rgba(142,142,142,1) 0%, rgba(88,88,88,1) 100%)'};
border-top: 1px solid;
border-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'e9e9e9' : '303030'};
margin-top: 60px;
`
const Content = StyledComponent.div`
width: 60%;
height: auto;
text-align: center;
margin: 0 auto;
margin-top: 40px;
`
const DarkModeButton = StyledComponent.button`
width: 50px;
height: 50px;
border-radius: 25px;
border: none;
color: white;
cursor:pointer;
background-color: #575757;
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <FooterContainer isDarkMode={theme}>
      <Content>
        <DarkModeButton onClick={() => toggleTheme()}>
          {theme === 'light' ? '☀️' : '🌙'}
        </DarkModeButton>
        <br />
        <br />© AgenceBrillante 2022 - Tous droits réservés
        <br />
      </Content>
    </FooterContainer>
  )
}

export default Footer
