import styledComponents from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeContext, SurveyContext } from '../../utils/context'
import { useContext } from 'react'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/Atom'

const ContainerResult = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-radius: 30px;
text-align: center;
border-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'e9e9e9' : 'CFCFCF'};
background-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'fcfcfc' : '999999'};
`
const ContainerTitle = styledComponents.div`
width: 70%;
margin: 0 auto;
margin-top: 60px;
`
const TitleH2 = styledComponents.span`
color: black;
font-size: 24px;
`
const ButtonChooseFreelance = styledComponents(Link)`
padding-left: 5%;
padding-right: 5%;
background-color: #a0cecb;
border-radius: 30px;
text-decoration: none;
border: none;
color: white;
cursor:pointer;
`
const ContainerCompetenceDescription = styledComponents.div`
width: 80%;
height: auto;
margin: 0 auto;
`
const TitleDescription = styledComponents.h2`
color: #a0cecb;
`

function formatQueryParams(resultSurvey) {
  const answerNumbers = []
  resultSurvey.map((result) => answerNumbers.push(result.questionNumber))

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0
    const separator = isFirstAnswer ? '' : '&'
    if (resultSurvey[answerNumber - 1].answerQuestion === 'oui') {
      return `${previousParams}${separator}a${answerNumber}=1`
    } else {
      return `${previousParams}`
    }
  }, '')
}

function Result() {
  const { theme } = useContext(ThemeContext)
  const { resultSurvey } = useContext(SurveyContext)
  const queryParams = formatQueryParams(resultSurvey)

  const { data, loading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  )

  if (error) {
    return <span>Il y a eu un problème</span>
  }

  return (
    <ContainerResult isDarkMode={theme}>
      <ContainerTitle>
        <TitleH2>Les compétences dont vous avez besoin : </TitleH2>
        <br />
        <br />
        <ButtonChooseFreelance to={'/freelances'}>
          Choisir quelqu'un possédant ses compétences !
        </ButtonChooseFreelance>
      </ContainerTitle>
      {loading === true ? (
        <div>
          <br />
          <Loader />
          <br />
        </div>
      ) : (
        data.resultsData.map((comp) => (
          <div>
            <TitleDescription>{comp.title}</TitleDescription>
            <ContainerCompetenceDescription>
              {comp.description}
            </ContainerCompetenceDescription>
          </div>
        ))
      )}
      <br />
      <br />
    </ContainerResult>
  )
}

export default Result
