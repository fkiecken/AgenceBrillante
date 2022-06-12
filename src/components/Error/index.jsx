import styledComponents from "styled-components"

const ContainerError = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
text-align: center;
`

function Error() {
    return (
        <ContainerError>
            <h1>ERREUR 404 ZEBI</h1>
        </ContainerError>
    )
}

export default Error