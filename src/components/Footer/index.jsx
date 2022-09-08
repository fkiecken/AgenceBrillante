import { useContext } from 'react'
import StyledComponent from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { useTheme } from '../../utils/hooks'
import EmailInput from '../EmailInput'

const FooterContainer = StyledComponent.div`
width: 100%;
height: 100%;
background: ${({ gradientBackgroundFooter }) =>
  gradientBackgroundFooter
    ? gradientBackgroundFooter
    : gradientBackgroundFooter};
color: #${({ colorText }) => (colorText ? colorText : colorText)};
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
cursor: pointer;
background-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'E5E5E5' : '575757'};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const { gradientBackgroundFooter, colorText } = useTheme(theme)

  return (
    <FooterContainer
      isDarkMode={theme}
      gradientBackgroundFooter={gradientBackgroundFooter}
      colorText={colorText}
    >
      <Content>
        <DarkModeButton isDarkMode={theme} onClick={() => toggleTheme()}>
          {theme === 'light' ? '☀️' : '🌙'}
        </DarkModeButton>
        <br /><br />
        <EmailInput/>
        <br />
        <br />© AgenceBrillante 2022 - Tous droits réservés
        <br />
      </Content>
    </FooterContainer>
  )
}

export default Footer
