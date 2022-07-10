import styledComponents from 'styled-components'
import Eror404 from '../../assets/img/error404.png'
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'
import { useTheme } from '../../utils/hooks'

const ContainerError = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-color: #${({ borderColor }) =>
  borderColor ? borderColor : borderColor};
border-radius: 30px;
background-color: #${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : backgroundColor};
text-align: center;
`
const ImageError = styledComponents.img`
width: 60%;
height: 60%;
`

function Error() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)

  return (
    <ContainerError backgroundColor={backgroundColor} borderColor={borderColor}>
      <h1>ERREUR 404 ZEBI</h1>
      <ImageError src={Eror404} />
    </ContainerError>
  )
}

export default Error
