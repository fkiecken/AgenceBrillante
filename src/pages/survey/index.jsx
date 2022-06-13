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
border: 1px solid;
border-color: #e9e9e9;
border-radius: 30px;
background-color: #fcfcfc;
text-align: center;
`
const PrecedentButtonDisable = styledComponents(Link)`
color: transparent;
pointer-events: none;
padding:20px 80px;
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

useEffect(() => {
  if(parseInt(questionNumber) === 10) {
    setShowResult(true)
  } else {
    setShowResult(false)
  }
  if(parseInt(questionNumber) === 1) {
    setPrecedentButtonEnable(false)
  } else {
    setPrecedentButtonEnable(true)
  }
}, [questionNumber])

function Zizi() {
  alert("zizi")
}

  return (
    <ContainerSurvey>
      <QuestionTitle>Question n°{ questionNumber }</QuestionTitle>
      <ContainerQuestion>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi elit, laoreet vel mi vitae, consectetur fringilla eros. Mauris sit amet scelerisque quam, quis finibus est. Suspendisse eu felis odio. Donec semper tristique purus, id malesuada felis venenatis vitae. Ut in mauris a dui fringilla rutrum ?</ContainerQuestion>
      <ButtonQuestion onClick={() => Zizi()}>Oui</ButtonQuestion>
      <ButtonQuestion onClick={() => Zizi()}>Non</ButtonQuestion>
      <br/><br/><br/>
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
      <br/><br/>
    </ContainerSurvey>
  )
}

export default Survey
