import Card from '../../components/Card'
import { Loader } from '../../utils/Atom'
import EmptyList from '../../components/EmptyList'
import styledComponents from 'styled-components'
import { useContext } from 'react'
import { ThemeContext, SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'

const ContainerFreelances = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-radius: 30px;
border-color: #${({ borderColor }) =>
  borderColor ? borderColor : borderColor};
background-color: #${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : backgroundColor};
`
const ContainerAllCards = styledComponents.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
width: 98%;
height: auto;
margin: auto;
`

function Freelances() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)
  const { data, loading, error } = useFetch('http://localhost:8000/freelances')
  const { resultSurvey } = useContext(SurveyContext)
 
  var showMessagesEmptyListCompetence = false
  if(resultSurvey != null) {
    for(let i = 0; i < resultSurvey.length; i++) {
      if(resultSurvey[i].answerQuestion === 'oui') {
        showMessagesEmptyListCompetence = true
      }
    }
  }

  if (error) {
    return <span data-testid="error">{error}</span>
  }

  return (
    <div>
    {
        showMessagesEmptyListCompetence === false ? <EmptyList/> : null
    }
    <ContainerFreelances
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      <h1>NOS INDÉPENDANTS 🙏🤸‍♂️💯🔥 : </h1>
      {loading === true ? (
        <div>
          <br />
          <Loader data-testid="loader" />
          <br />
        </div>
      ) : (
        <ContainerAllCards>
          {data.freelancersList.map((profile, index) => (
            <Card
              key={profile.name + index}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </ContainerAllCards>
      )}
    </ContainerFreelances>
    </div>
  )
}

export default Freelances
