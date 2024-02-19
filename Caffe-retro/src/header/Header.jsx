import './Header.css';
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className='navbar'>
      <a className='nav-link' href="#hot">Hot</a>
      <a className='nav-link' href="#juicy">Juicy</a>
      <a className='nav-link' href="#cosy">cosy</a>
    </nav>
  )
}

export default Header