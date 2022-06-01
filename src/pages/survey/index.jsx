import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

function Survey() {

var { questionNumber } = useParams()

useEffect(() => {
  console.log(questionNumber)
  if(parseInt(questionNumber) === 10) {
    alert('RESULTAT')
    console.log('RESULTAT')
  }
  if(parseInt(questionNumber) === 0) {
    alert('DESCNED PLUS')
    console.log('DESCEND PLUS')
  }
}, [questionNumber])

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question : { questionNumber }</h2>
      <Link to={'/survey/' + (parseInt(questionNumber)-1)}>Précédent</Link>
      <Link to={'/survey/' + (parseInt(questionNumber)+1)}>Suivant</Link>
    </div>
  )
}

export default Survey
