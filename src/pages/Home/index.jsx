import Illustration from '../../assets/img/home.png'
import styledComponents from "styled-components"
import { Link } from 'react-router-dom'

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
  margin-left: 30%;
`
const ContainerText = styledComponents.div`
  width: 30%;
  height: auto;
  position: absolute;
  top: 30%;
  margin-left: 20px;
`
const Title = styledComponents.h1`
  color: #a0cecb;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 34px;
  line-height: 50px;
`
const ButtonToSurvey = styledComponents(Link)`
  padding-left: 115px;
  padding-right: 115px;
  background-color: #a0cecb;
  border-radius: 30px;
  text-decoration: none;
  border: none;
  color: white;
  cursor:pointer;
  margin-left: 20px;
`

function Home() {
  return (
    <ContainerHome>
      <ContainerText>
        <Title>Repérez vos besoins,<br/>on s'occupe du reste,<br/>avec les meilleurs<br/>talents</Title>
        <ButtonToSurvey to="/survey/1">Faire le test</ButtonToSurvey>
      </ContainerText>
      <HomeImage src={Illustration}/>
    </ContainerHome>
  )
}

export default Home
