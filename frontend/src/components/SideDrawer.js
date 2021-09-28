import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function SideDrawer({ show, click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  const sidedrawerClass = ["sidedrawer"];

  if (show) {
    sidedrawerClass.push("show");
  }
  return (
    <div className={sidedrawerClass.join(" ")}>
      <ul className='siderawer__links' onClick={click}>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              cart{" "}
              <span className='sidedrawer__cartbadge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
