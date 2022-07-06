import styledComponents from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeContext, SurveyContext } from '../../utils/context'
import { useContext } from 'react'

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
const NeededCompetences = styledComponents.span`
color: #a0cecb;
font-size: 24px;
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

function Result() {
  const { theme } = useContext(ThemeContext)
  const { resultSurvey } = useContext(SurveyContext)

  return (
    <ContainerResult isDarkMode={theme}>
      <ContainerTitle>
        <TitleH2>Les compétences dont vous avez besoin : </TitleH2>
        <NeededCompetences>UX Design, Frontend, Backend</NeededCompetences>
        <br />
        <br />
        <ButtonChooseFreelance to={'/freelances'}>
          Choisir quelqu'un possédant ses compétences !
        </ButtonChooseFreelance>
      </ContainerTitle>
      <ContainerCompetenceDescription>
        <TitleDescription>UX Design</TitleDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nec
        risus eu fringilla. Phasellus dapibus nunc metus, eget lobortis nisi
        porta in.
        <TitleDescription>Frontend</TitleDescription>
        Mauris eget iaculis nisl. Proin sit amet nunc volutpat, fermentum nibh
        in, iaculis felis. Ut sit amet urna diam. Quisque ornare mauris libero,
        vitae lobortis ex pellentesque in.
        <TitleDescription>Backend</TitleDescription>
        Ut sagittis sodales interdum. Aliquam tincidunt, dui id ullamcorper
        blandit, sem nunc auctor libero, non laoreet ex magna id ipsum.
      </ContainerCompetenceDescription>
      <br />
      <br />
      {resultSurvey.map((result, index) => (
        <div key={index}>
          <p>
            Question numéro : {result.questionNumber} | vous avez répondu :{' '}
            {result.answerQuestion}
          </p>
        </div>
      ))}
    </ContainerResult>
  )
}

export default Result
