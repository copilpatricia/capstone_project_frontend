import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav className="container-nav">
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                <h1>taste the joy</h1>
            </Link>
            <ul className="container-ul">
                <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: "black" }}>
                    <li>About</li>
                </Link>
                <Link to="/recipes" style={{ textDecoration: 'none', color: "black" }}>
                    <li>Recipes</li>

                </Link>
            </ul>
        </nav>
    )
}

export default Nav