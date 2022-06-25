import { useState } from 'react'
import StyledComponent from 'styled-components'

const FooterContainer = StyledComponent.div`
width: 100%;
height: 120px;
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(252,252,252,1) 100%);border-top: 1px solid;
border-color: #e9e9e9;
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
width: 150px;
height: 50px;
border-radius: 25px;
border: none;
color: white;
cursor:pointer;
background-color: #575757;
`
const LightModeButton = StyledComponent.button`
width: 150px;
height: 50px;
border-radius: 25px;
border: none;
color: black;
cursor:pointer;
background-color: #D4D4D4;
`

function Footer() {
  const [activeTheme, setActiveTheme] = useState(false)

  return (
    <FooterContainer>
      <Content>
        {activeTheme === false ? (
          <DarkModeButton onClick={() => setActiveTheme(!activeTheme)}>
            Mode clair
          </DarkModeButton>
        ) : (
          <LightModeButton onClick={() => setActiveTheme(!activeTheme)}>
            Mode sombre
          </LightModeButton>
        )}
        <br />
        <br />© AgenceBrillante 2022 - Tous droits réservés
        <br />
      </Content>
    </FooterContainer>
  )
}

export default Footer
