import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Movie-Cards</h1>
      <nav className="navbar">
        <Link to='/' className="link">
          All Movies
        </Link>
        <Link to='/add' className="link">
          Add Movie
        </Link>
      </nav>
    </div>
  );
};

export default Header;
