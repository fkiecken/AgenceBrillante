import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import '../Header/style.css'
import styledComponents from "styled-components";

const ContainerHeader = styledComponents.div`
width: 100%;
height: 50px;
top: 0;
right: 0;
background-color: rgb(65, 65, 65);
position: fixed;
text-align: center;
`

const LinkHeader = styledComponents(Link)`
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
box-shadow: inset 0 0 0 0 #${colors.backgroundHover};
color: #54b3d6;
margin: 0 -.25rem;
padding: 0 .25rem;
transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
text-decoration: none;
width: auto;
margin: 5px;
&:hover {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: inset 120px 0 0 0 #${colors.backgroundHover};
    color: white;
    text-decoration: none;
}
`

function Header() {

    return (
        <ContainerHeader>
            <nav>
                <br/>
                <LinkHeader to="/">ACCUEIL</LinkHeader>
                <LinkHeader to="/survey/1">QUESTIONNAIRE</LinkHeader>
                <LinkHeader to="/freelances">INDÉPENDANTS</LinkHeader>
            </nav>
        </ContainerHeader>
    )
}

export default Header