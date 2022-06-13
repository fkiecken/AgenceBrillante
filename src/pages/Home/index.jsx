import Illustration from '../../assets/img/home.png'
import styledComponents from "styled-components"

const ContainerHome = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
border: 1px solid;
border-color: #e9e9e9;
border-radius: 30px;
background-color: #fcfcfc;
`

const HomeImage = styledComponents.img`
width: 60%;
height: 60%;
margin-left: 40%;
margin-top: -15%;
`

const ContainerText = styledComponents.div`
width: 30%;
height: auto;
background-color: black;
`

function Home() {
  return (
    <ContainerHome>
      <ContainerText>
        <h1>Repérez vos besois,<br/>on s'occupe du reste,<br/>avec les meilleurs<br/>talents</h1>
      </ContainerText>
      <HomeImage src={Illustration}/>
    </ContainerHome>
  )
}

export default Home
