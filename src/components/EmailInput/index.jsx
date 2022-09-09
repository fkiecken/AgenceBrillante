import { useState } from 'react'

function EmailInput() {
  const [valueInput, setValueInput] = useState('')

  return (
    <div>
      <p>Inscrivez-vous à notre newsletter :</p>
      <input
        onChange={(e) => setValueInput(e.target.value)}
        defaultValue="adressemail@exemple.fr"
      />{' '}
      <button>Submit</button>
      <br />
      <br />
    </div>
  )
}

export default EmailInput
