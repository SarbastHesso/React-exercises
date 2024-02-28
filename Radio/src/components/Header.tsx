import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-search-wrapper">
          <NavLink to='/' className="logo">
            <span>SR</span>
          </NavLink>
          <form className="search-form">
            <input type="text" className="search-input" placeholder="Sök program"/>
          </form>
        </div>
        <nav className="navbar">
          <NavLink to={"/channels"} className="navlink">
            Kanaler
          </NavLink>
          <NavLink to={"/programs"} className="navlink">
            Program
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header