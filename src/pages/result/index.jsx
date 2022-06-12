import styledComponents from "styled-components"

const ContainerResult = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
`

function Result() {
    return (
        <ContainerResult>
            <h1>RESULTAT</h1>
        </ContainerResult>
    )
}

export default Result