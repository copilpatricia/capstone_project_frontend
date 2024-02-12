import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Nav() {
  const userCtx = useContext(UserContext);
  const handleSignOut = () => {
    localStorage.clear("blogUser");
    userCtx.setUser(null);
  };

  return (
    <nav className="container-nav">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1>taste the joy</h1>
      </Link>
      <ul className="container-ul">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <li>About</li>
        </Link>
        <Link to="/recipes" style={{ textDecoration: "none", color: "black" }}>
          <li>Recipes</li>
        </Link>
        <Link
          to=""
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleSignOut}
        >
          <li>Sign out</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
