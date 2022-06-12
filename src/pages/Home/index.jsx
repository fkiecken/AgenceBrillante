import styledComponents from "styled-components"

const ContainerHome = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
`

function Home() {
  return (
    <ContainerHome>
      Page d'accueil 🏡
    </ContainerHome>
  )
}

export default Home
