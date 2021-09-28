import "./Cartscreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../Redux/actions/cartActions";

const Cartscreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // function allow you to change qty in the cart screen instead of productScreen
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  // remove Product
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  // cart count products
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  //count price function
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <div className='cartScreen'>
      <div className='cartscreen__left'>
        <h2>shooping cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart is emty <Link to='/'>Go There</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>

      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>subtitle ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed To checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
