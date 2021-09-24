import "./Cartscreen.css";
import CartItem from "../components/CartItem";
const Cartscreen = () => {
  return (
    <div className='cartScreen'>
      <div className='cartscreen__left'>
        <h2>shooping cart</h2>
        <CartItem />
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>subtitle (0) items</p>
          <p>$553</p>
        </div>
        <div>
          <button>Proceed To checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
