import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styledComponents from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { ThemeContext } from '../../utils/context'
import { Loader } from '../../utils/Atom'

const ContainerProfile = styledComponents.div`
width: 60%;
min-width: 500px;
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
const CardProfile = styledComponents.div`
width: 500px;
background-color: #7c6d51;
height: auto;
margin: auto;
border-radius: 10px 100px / 120px;
color: white;
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
`
const TitleProfile = styledComponents.h1`
font-size: 22px;
color: white;
`
const ContentProfile = styledComponents.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`
const ContentProfileLeft = styledComponents.div`
grid-area: 1 / 1 / 2 / 2;
`
const ContentProfileRight = styledComponents.div`
grid-area: 1 / 2 / 2 / 3;
text-align: left;
margin-top: 10px;
`
const ImageProfile = styledComponents.img`
max-width: 150px;
max-height: 150px;
border-radius: 15px;
`
const TitleJob = styledComponents.div`
font-size: 16px;
color: white;
font-weight: bold;
`
const AvailableButton = styledComponents.button`
width: 50%;
height: 30px;
background-color: #3F9100;
border: none;
color: white;
margin: auto;
border-radius: 5px;
`
const UnnableButton = styledComponents.button`
width: 50%;
height: 30px;
background-color: #D63D3B;
border: none;
color: white;
margin: auto;
border-radius: 5px;
`
const ReturnButton = styledComponents(Link)`
padding-right: 20px;
padding-left: 20px;
background-color: #a0cecb;
color: white;
border-radius: 5px;
margin-left: 20px;
`
const ContainerLinkButton = styledComponents.div`
width: 500px;
height: auto;
margin: auto;
`
const PreviousFreelanceButton = styledComponents(Link)`
padding-right: 20px;
padding-left: 20px;
background-color: #a0cecb;
color: white;
border-radius: 5px;
`
const NextFreelanceButton = styledComponents(Link)`
padding-right: 20px;
padding-left: 20px;
background-color: #a0cecb;
color: white;
border-radius: 5px;
float: right;
`
function Profile() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, borderColor } = useTheme(theme)
  let params = useParams()
  const { data, loading, error } = useFetch(
    `http://localhost:8000/freelance?id=${params.id}`
  )

  if (error) {
    return <span data-testid="error">{error}</span>
  }

  return (
    <ContainerProfile
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <br />
      <ReturnButton to={'/freelances'}>Retour</ReturnButton>
      {loading === true ? (
        <div>
          <br />
          <Loader data-testid="loader" />
          <br />
        </div>
      ) : (
        <div>
          <br />
          <CardProfile>
            <TitleProfile>{data.freelanceData.name}</TitleProfile>
            <ContentProfile>
              <ContentProfileLeft>
                <ImageProfile src={data.freelanceData.picture} />
              </ContentProfileLeft>
              <ContentProfileRight>
                <TitleJob>{data.freelanceData.job}</TitleJob>
                <p>
                  Compétences :{' '}
                  <b>{data.freelanceData.skills.map((skill) => skill + ' ')}</b>
                </p>
                <p>
                  Localisation : <b>{data.freelanceData.location}</b>
                </p>
                <p>
                  Tarif journalier moyen : <b>{data.freelanceData.tjm}</b> €
                </p>
              </ContentProfileRight>
            </ContentProfile>
            {data.freelanceData.available ? (
              <div>
                <br />
                <AvailableButton>
                  Freelance disponible. Contactez le !
                </AvailableButton>
                <br />
                <br />
              </div>
            ) : (
              <div>
                <br />
                <UnnableButton>
                  Ce freelance n'est pas disponible.
                </UnnableButton>
                <br />
                <br />
              </div>
            )}
          </CardProfile>
          <br />
        </div>
      )}
      <ContainerLinkButton>
        <PreviousFreelanceButton to={`/profile/${parseInt(params.id) - 1}`}>
          Précédent
        </PreviousFreelanceButton>
        <NextFreelanceButton to={`/profile/${parseInt(params.id) + 1}`}>
          Suivant
        </NextFreelanceButton>
      </ContainerLinkButton>
      <br />
      <br />
    </ContainerProfile>
  )
}

export default Profile
