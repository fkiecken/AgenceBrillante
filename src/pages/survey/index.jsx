import { useParams, Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import styledComponents from 'styled-components'
import '../survey/style.css'
import { Loader } from '../../utils/Atom'
import { ThemeContext } from '../../utils/context'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'

const ContainerSurvey = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-radius: 30px;
text-align: center;
border-color: #${({ borderColor }) =>
  borderColor ? borderColor : borderColor};
background-color: #${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : backgroundColor};
color: #${({ colorText }) => (colorText ? colorText : colorText)};
`
const QuestionTitle = styledComponents.h2`
text-decoration: underline;
text-decoration-color: #a0cecb;
`
const ContainerQuestion = styledComponents.div`
width: 60%;
height: auto;
text-align: center;
margin: 0 auto;
padding: 40px;
`
const ButtonQuestion = styledComponents.button`
width: 200px;
height: 100px;
background-color: #${({ buttonColor }) =>
  buttonColor ? buttonColor : buttonColor};
color: #${({ colorText }) => (colorText ? colorText : colorText)};
border: solid 2px;
border-color: #a0cecb;
border-radius: 30px;
margin: 20px;
cursor:pointer;
transition: color 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
&:hover {
  box-shadow: inset 600px 0 0 0 #a0cecb;
}
`
const AnswerQuestionButton = styledComponents.button`
width: 100px;
height: 50px;
border: solid 2px;
border-color: #a0cecb;
border-radius: 30px;
margin: 60px;
cursor:pointer;
transition: color 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
background-color: #${({ buttonColor, backgroundColorAnswerButton }) =>
  backgroundColorAnswerButton === false ? buttonColor : 'a0cecb'};
color: #${({ colorText }) => (colorText ? colorText : colorText)}
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor, buttonColor, colorText } =
    useTheme(theme)
  const { resultSurvey } = useContext(SurveyContext)
  const [statutYesAnswerButton, setstatutYesAnswerButton] = useState(false)
  const [statutNoAnswerButton, setstatutNoAnswerButton] = useState(false)
  const { data, loading, error } = useFetch('http://localhost:8000/survey')
  const { surveyData } = data

  function setAnswerQuestion(valueButton) {
    if (valueButton === 'oui') {
      if (statutYesAnswerButton === false) {
        setstatutYesAnswerButton(true)
        setstatutNoAnswerButton(false)
      } else {
        if (statutYesAnswerButton === true) {
          setstatutYesAnswerButton(false)
        }
      }
      resultSurvey[questionNumber - 1].answerQuestion = 'oui'
    } else {
      if (valueButton === 'non') {
        if (statutNoAnswerButton === false) {
          setstatutNoAnswerButton(true)
          setstatutYesAnswerButton(false)
        } else {
          if (statutNoAnswerButton === true) {
            setstatutNoAnswerButton(false)
          }
        }
        resultSurvey[questionNumber - 1].answerQuestion = 'non'
      }
    }
  }

  function resetAnswerButton() {
    setstatutYesAnswerButton(false)
    setstatutNoAnswerButton(false)
  }

  if (error) {
    return <span>Il y a eu un problème</span>
  }

  return (
    <ContainerSurvey
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      colorText={colorText}
    >
      <QuestionTitle>Question n°{questionNumber}</QuestionTitle>
      {loading === true ? (
        <div>
          <br />
          <Loader />
          <br />
        </div>
      ) : (
        <ContainerQuestion>
          {surveyData && surveyData[questionNumberInt]}
        </ContainerQuestion>
      )}
      <AnswerQuestionButton
        backgroundColorAnswerButton={statutYesAnswerButton}
        colorText={colorText}
        buttonColor={buttonColor}
        onClick={() => setAnswerQuestion('oui')}
      >
        Oui
      </AnswerQuestionButton>
      <AnswerQuestionButton
        backgroundColorAnswerButton={statutNoAnswerButton}
        colorText={colorText}
        buttonColor={buttonColor}
        onClick={() => setAnswerQuestion('non')}
      >
        Non
      </AnswerQuestionButton>
      <br />
      <Link to={`/survey/${prevQuestionNumber}`}>
        <ButtonQuestion
          onClick={() => resetAnswerButton()}
          buttonColor={buttonColor}
          colorText={colorText}
        >
          Précédent
        </ButtonQuestion>
      </Link>
      {questionNumberInt !== 6 ? (
        <Link to={`/survey/${nextQuestionNumber}`}>
          <ButtonQuestion
            onClick={() => resetAnswerButton()}
            buttonColor={buttonColor}
            colorText={colorText}
          >
            Suivant
          </ButtonQuestion>
        </Link>
      ) : (
        <Link to="../result">
          <ButtonQuestion buttonColor={buttonColor} colorText={colorText}>
            Résultats
          </ButtonQuestion>
        </Link>
      )}
    </ContainerSurvey>
  )
}

export default Survey
