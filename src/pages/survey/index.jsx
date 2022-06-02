import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../survey/style.css'

function Survey() {

var { questionNumber } = useParams()
const [showResult, setShowResult] = useState(false)
const [precedentButtonEnable, setPrecedentButtonEnable] = useState(true)

useEffect(() => {
  if(parseInt(questionNumber) === 10) {
    setShowResult(true)
  } else {
    setShowResult(false)
  }
  if(parseInt(questionNumber) === 0) {
    setPrecedentButtonEnable(false)
  }
}, [questionNumber])

  return (
    <div className='containerSurvey'>
      <h1>Questionnaire</h1>
      <h2>Question : { questionNumber }</h2>
      {
        precedentButtonEnable === true ?
        <Link to={'/survey/' + (parseInt(questionNumber)-1)} className='button'>Précédent</Link> :
        <Link to={'/survey/' + (parseInt(questionNumber)-1)} className='precedentButtonDisable'>Précédent</Link>
      }      
      {
        showResult === false ?
        <Link to={'/survey/' + (parseInt(questionNumber)+1)} className='button'>Suivant</Link> :
        <Link to={'/result/'} className='button'>Résultat</Link>

      }
    </div>
  )
}

export default Survey
