import { useState } from "react"

function EmailInput() {

    const [valueInput, setValueInput] = useState('')

    return (

        <div>
            {valueInput}
            <input
                onChange={(e) => setValueInput(e.target.value)}
            />
        </div>

    )
}

export default EmailInput