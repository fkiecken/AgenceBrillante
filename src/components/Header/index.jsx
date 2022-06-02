import { Link } from "react-router-dom";
import '../Header/style.css'

function Header() {

    return (
        <div className="containerHeader">
            <nav>
                <br/>
                <span><Link to="/" className="linkHeader">ACCUEIL</Link></span>
                <span><Link to="/survey/1" className="linkHeader">QUESTIONNAIRE</Link></span>
                <span><Link to="/freelances" className="linkHeader">INDÉPENDANTS</Link></span>
            </nav>
        </div>
    )
}

export default Header