import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* logo */}
      <div className='navbar__Logo'>
        <h2>Mern shopping cart Links</h2>
      </div>
      {/* links */}
      <ul className='navbar_links'>
        <li>
          <Link to='/cart' className='cart__link'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              cart
              <span className='cartlogo__badge'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>shop</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className='hamburger__menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
