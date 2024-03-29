import Illustration from '../../assets/img/home.png'
import styledComponents from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks'

const ContainerHome = styledComponents.div`
  width: 60%;
  height: auto;
  margin: auto;
  margin-top: 10px;
  border: 1px solid;
  border-color: #${({ borderColor }) =>
    borderColor ? borderColor : borderColor};
  background-color: #${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : backgroundColor};
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`
const ContainerRight = styledComponents.div`
  grid-area: 1 / 2 / 2 / 3;
`
const ContainerLeft = styledComponents.div`
  grid-area: 1 / 1 / 2 / 2;
`
const Title = styledComponents.div`
  color: #a0cecb;
  font-size: 34px;
  line-height: 50px;
  margin-top: 15%;
  margin-left: 10%;
  margin-bottom: 3%;
  max-width: 330px;
  min-width; 20px;
`
const ButtonToSurvey = styledComponents(Link)`
  padding-left: 15%;
  padding-right: 15%;
  background-color: #a0cecb;
  border-radius: 30px;
  text-decoration: none;
  border: none;
  color: white;
  cursor:pointer;
  margin-left: 10%;
  margin-bottom: 5%;
`
const HomeImage = styledComponents.img`
width: 100%;
height: 100%
`

function Home() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)

  return (
    <ContainerHome backgroundColor={backgroundColor} borderColor={borderColor}>
      <ContainerLeft>
        <Title>
          <h2>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </h2>
        </Title>
        <ButtonToSurvey to="/survey/1">Faire le test</ButtonToSurvey>
        <br />
        <br />
      </ContainerLeft>
      <ContainerRight>
        <HomeImage src={Illustration} />
      </ContainerRight>
    </ContainerHome>
  )
}

export default Home
