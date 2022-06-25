import StyledComponent from "styled-components"

const FooterContainer = StyledComponent.div`
width: 100%;
height: 120px;
background-color: #fcfcfc;
border-top: 1px solid;
border-color: #e9e9e9;
bottom: 0;
position: absolute;
`

function Footer() {

    return (
        <FooterContainer>
            zizi<br/>
        </FooterContainer>
    )
}

export default Footer