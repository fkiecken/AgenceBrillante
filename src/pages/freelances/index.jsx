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
border: 1px solid;
border-color: #e9e9e9;
border-radius: 30px;
background-color: #fcfcfc;
`
const ContainerAllCards = styledComponents.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;
background-color: #000000;
align-items: center;
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