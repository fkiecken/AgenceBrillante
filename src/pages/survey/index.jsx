import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import '../survey/style.css'

function Survey() {

var { questionNumber } = useParams()
const [showResult, setShowResult] = useState(false)
const [precedentButtonEnable, setPrecedentButtonEnable] = useState(true)
const ContainerSurvey = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
`
const PrecedentButtonDisable = styledComponents(Link)`
box-shadow:inset 0px 1px 0px 0px #ffffff;
background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
background-color:#ffffff;
border-radius:6px;
border:1px solid #dcdcdc;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #ffffff;
pointer-events: none;
margin: 5px;
`

useEffect(() => {
  if(parseInt(questionNumber) === 10) {
    setShowResult(true)
  } else {
    setShowResult(false)
  }
  if(parseInt(questionNumber) === 0) {
    setPrecedentButtonEnable(false)
  } else {
    setPrecedentButtonEnable(true)
  }
}, [questionNumber])

  return (
    <ContainerSurvey>
      <h1>Questionnaire</h1>
      <h2>Question : { questionNumber }</h2>
      {
        precedentButtonEnable === true ?
        <Link to={'/survey/' + (parseInt(questionNumber)-1)} className='button'>Précédent</Link> :
        <PrecedentButtonDisable to={'/survey/' + (parseInt(questionNumber)-1)}>Précédent</PrecedentButtonDisable>
      }      
      {
        showResult === false ?
        <Link to={'/survey/' + (parseInt(questionNumber)+1)} className='button'>Suivant</Link> :
        <Link to={'/result/'} className='button'>Résultat</Link>

      }
    </ContainerSurvey>
  )
}

export default Survey
