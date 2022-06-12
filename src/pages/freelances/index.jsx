import Card from '../../components/Card'
import DefaultPicture from '../../assets/img/pitre.png'
import styledComponents from 'styled-components'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        picture: DefaultPicture,
    },
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const ContainerFreelances = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
`
const ContainerAllCards = styledComponents.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;
`

function Freelances() {
    return (
        <ContainerFreelances>
            <h1>NOS INDÉPENDANTS 🙏🤸‍♂️💯🔥 : </h1>
            <ContainerAllCards>
            {
                freelanceProfiles.map((profile, index) => (
                    <Card
                        key={profile.name + index}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}    
                    />
                ))
            }
            </ContainerAllCards>
        </ContainerFreelances>
    )
}

export default Freelances