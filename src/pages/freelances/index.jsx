import Card from '../../components/Card'
import { Loader } from '../../utils/Atom'
import styledComponents from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

const ContainerFreelances = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 10px;
border: 1px solid;
border-radius: 30px;
border-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'e9e9e9' : 'CFCFCF'};
background-color: #${({ isDarkMode }) =>
  isDarkMode === 'light' ? 'fcfcfc' : '999999'};
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

  const { data, loading, error } = useFetch('http://localhost:8000/freelances')

  return (
    <ContainerFreelances isDarkMode={theme}>
      <h1>NOS INDÉPENDANTS 🙏🤸‍♂️💯🔥 : </h1>
      {loading === true ? (
        <div>
          <br />
          <Loader />
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
