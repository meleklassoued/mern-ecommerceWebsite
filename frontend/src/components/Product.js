import "./product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className='Product'>
      <img
        src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        alt='Product  Name'
      />
      <div className='product__info'>
        <p className='info__name'>Product1</p>
        <p className='info__description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eius
          assumenda sapiente ut fugit, culpa eum veniam adipisci. Magni nam
          repudiandae similique laboriosam quaerat cumque saepe molestias
          cupiditate porro. Illum!
        </p>
        <p className='info__price'>$332</p>

        <Link to={`/product/${1111}`} className='info__button'>
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
