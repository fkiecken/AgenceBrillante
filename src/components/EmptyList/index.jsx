import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

const ContainerEmptyList = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
border: 1px solid;
border-radius: 30px;
border-color: #e9e9e9;
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
    return(
        <ContainerEmptyList>
            <h1>Dommage...</h1>
            <ContainerSubtitles>
                Il semblerait que nous n'ayez besoin d'aucune compétence ou que vous n'ayez pas renseigné le <LinkSurvey to="/survey/1">questionnaire</LinkSurvey>.
                <br/><br/><br/>
            </ContainerSubtitles>
        </ContainerEmptyList>
    )
}

export default EmptyList