import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { useTheme } from '../../utils/hooks'

const ContainerEmptyList = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
border: 1px solid;
border-radius: 30px;
border-color: #${({ borderColor }) =>
  borderColor ? borderColor : borderColor};
background-color: #${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : backgroundColor};
`
const ContainerSubtitles = styledComponents.div`
width: 90%;
height: auto;
margin: auto;
margin-top: 10px;
`
const LinkSurvey = styledComponents(Link)`
  color: #a0cecb;
`

function EmptyList() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)

  return (
    <ContainerEmptyList
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <h1>Dommage...</h1>
      <ContainerSubtitles>
        Il semblerait que nous n'ayez besoin d'aucune compétence ou que vous
        n'ayez pas renseigné le{' '}
        <LinkSurvey to="/survey/1">questionnaire</LinkSurvey>.
        <br />
        <br />
        <br />
      </ContainerSubtitles>
    </ContainerEmptyList>
  )
}

export default EmptyList
