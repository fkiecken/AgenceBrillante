import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import '../survey/style.css'
import { Loader } from '../../utils/Atom'

const ContainerSurvey = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
border: 1px solid;
border-color: #e9e9e9;
border-radius: 30px;
background-color: #fcfcfc;
text-align: center;
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
background-color: white;
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

function Survey() {

const { questionNumber } = useParams()
const questionNumberInt = parseInt(questionNumber)
const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
const nextQuestionNumber = questionNumberInt + 1
const [surveyData, setSurveyData] = useState({})
const [isDataLoading, setIsDataLoading] = useState(false)

useEffect(() => {
  setIsDataLoading(true)
  fetch('http://localhost:8000/survey')
    .then((response) => response.json())
    .then(({ surveyData }) => {
      setSurveyData(surveyData)
      setIsDataLoading(false)
    }
  )
}, [])

  return (
    <ContainerSurvey>
      <QuestionTitle>Question n°{ questionNumber }</QuestionTitle>
      {
        isDataLoading === true ?
        (
          <div>
            <br/>
              <Loader/>
            <br/>
          </div>
        ) :
        (
          <ContainerQuestion>{surveyData[questionNumberInt]}</ContainerQuestion>
        )
      }
      <Link to={`/survey/${prevQuestionNumber}`}><ButtonQuestion>Précédent</ButtonQuestion></Link>
      {
        questionNumberInt !== 6 ? 
          ( <Link to={`/survey/${nextQuestionNumber}`}><ButtonQuestion>Suivant</ButtonQuestion></Link> ) :
          ( <Link to="../result"><ButtonQuestion>Résultats</ButtonQuestion></Link> )
      }
    </ContainerSurvey>
  )
}

export default Survey
