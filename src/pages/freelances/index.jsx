import Card from '../../components/Card'
import { Loader } from '../../utils/Atom'
import styledComponents from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'

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
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
width: 98%;
height: auto;
margin: auto;
`

function Freelances() {

    const [freelancersList, setfreelancersList] = useState({})
    const [isDataLoading, setIsDataLoading] = useState(true)

    useEffect(() => {
            setIsDataLoading(true)
            fetch('http://localhost:8000/freelances')
                .then((response) => response.json())
                .then(({ freelancersList }) => {
                    setfreelancersList(freelancersList)
                    setIsDataLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    alert("PROBLEME DE DATA : " + error)
                })
    }, [])

    return (
        <ContainerFreelances>
            <h1>NOS INDÉPENDANTS 🙏🤸‍♂️💯🔥 : </h1>
            {
                isDataLoading === true ? (
                    <div>
                        <br/>
                            <Loader/>
                        <br/>
                    </div>
                ) : (
                    <ContainerAllCards> 
                        {
                            freelancersList.map((profile, index) => (
                                <Card
                                    key={profile.name + index}
                                    label={profile.job}
                                    picture={profile.picture}
                                    title={profile.name}   
                                />
                            ))
                        }
                    </ContainerAllCards>
                )
            }
        </ContainerFreelances>
    )
}

export default Freelances