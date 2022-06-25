import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import logo from '../../assets/img/logo.png'
import styledComponents from "styled-components";

const ContainerHeader = styledComponents.div`
width: 60%;
height: 50px;
top: 0;
margin: 0 auto;
`
const ContainerLogo = styledComponents.div`
width: 25%;
height: 50px;
text-align: center;
float: left;
margin-top: 15px
`
const ContainerLink = styledComponents.div`
width: 430px;
height: 50px;
text-align: right;
float: right;
`
const LinkHeader = styledComponents(Link)`
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
box-shadow: inset 0 0 0 0 #${colors.backgroundHover};
background-color: #7c6d51;
color: #ffffff;
padding: 10px;
transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
text-decoration: none;
margin: 5px;
border-radius: 30px;
&:hover {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: inset 170px 0 0 0 #${colors.backgroundHover};
    color: white;
    text-decoration: none;
}
`
const LinkHeaderDoTheTest = styledComponents(Link)`
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
box-shadow: inset 0 0 0 0 #${colors.backgroundHover};
background-color: #${colors.backgroundHover};
color: #ffffff;
padding: 10px;
transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
text-decoration: none;
margin: 5px;
border-radius: 30px;
&:hover {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: inset 156px 0 0 0 #7c6d51;
    color: white;
}
`

function Header() {

    return (
        <ContainerHeader>
            <ContainerLogo> <img src={logo} alt="Logo" /></ContainerLogo>
            <ContainerLink>
                <nav>
                    <br/>
                    <LinkHeader to="/">ACCEUIL</LinkHeader>
                    <LinkHeader to="/freelances">NOS INDÉPENDANTS</LinkHeader>
                    <LinkHeaderDoTheTest to="/survey/1">FAITES LE TEST !</LinkHeaderDoTheTest>
                </nav>
            </ContainerLink>
        </ContainerHeader>
    )
}

export default Header