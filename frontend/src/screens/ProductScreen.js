import "./Productscreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* --------------------------------- Actions -------------------------------- */
import { getProductDetails } from "../Redux/actions/productActions";
import { addToCart } from "../Redux/actions/cartActions";
/* ---------------------------- finish ACTIONS ---------------------------- */
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  console.log(productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  // add the product to the cart 
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  return (
    <div className='productscreen'>
      {loading ? (
        <div class='main-circle rotate'>
          <div class='second-circle rotate'>
            <div class='circle big' id='circle-1'></div>
            <div class='two-circle'>
              <div class='circle big' id='circle-2'></div>
              <div></div>
              <div class='circle big' id='circle-3'></div>
            </div>
          </div>
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className='productscreen__left'>
            <div className='left_image'>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className='left__info'>
              <p className='left__name'>{product.name}</p>
              <p>Price:${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className='productscreen__right'>
            <div className='right__info'>
              <p>
                Price : <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In stock" : "out of stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type='button' onClick={addToCartHandler}>
                  Add To card
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
