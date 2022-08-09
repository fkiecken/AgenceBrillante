import Card from '../../components/Card'
import { Loader } from '../../utils/Atom'
import styledComponents from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'

const ContainerFreelances = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-radius: 30px;
border-color: #${({ borderColor }) =>
  borderColor ? borderColor : borderColor};
background-color: #${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : backgroundColor};
`
const ContainerAllCards = styledComponents.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
width: 98%;
height: auto;
margin: auto;
`

function Freelances() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)
  const { data, loading, error } = useFetch('http://localhost:8000/freelances')

  if (error) {
    return <span data-testid="error">{error}</span>
  }

  return (
    <ContainerFreelances
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      <h1>NOS INDÉPENDANTS 🙏🤸‍♂️💯🔥 : </h1>
      {loading === true ? (
        <div>
          <br />
          <Loader data-testid="loader" />
          <br />
        </div>
      ) : (
        <ContainerAllCards>
          {data.freelancersList.map((profile, index) => (
            <Card
              key={profile.name + index}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </ContainerAllCards>
      )}
    </ContainerFreelances>
  )
}

export default Freelances
