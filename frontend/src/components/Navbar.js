import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <nav className='navbar'>
      {/* logo */}
      <div className='navbar__Logo'>
        <h2>Malik shoppingCart</h2>
      </div>
      {/* links */}
      <ul className='navbar_links'>
        <li>
          <Link to='/cart' className='cart__link'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              cart
              <span className='cartlogo__badge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>shop</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
