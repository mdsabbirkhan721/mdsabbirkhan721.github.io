import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="card mb-3">
      <div className="row align-items-center">
        <div className="col-md-3 text-center">
          <img
            src={item.image}
            className="img-fluid p-2"
            alt={item.item_name}
          />
        </div>

        <div className="col-md-5">
          <h6>{item.item_name}</h6>
          <p className="mb-1">
            <strong>Rs {item.current_price}</strong>{' '}
            <span className="text-muted text-decoration-line-through">
              Rs {item.original_price}
            </span>
          </p>

          <span>Selected Size:</span>
          <span className="fw-bold">{item.size}</span>
          <h6>
            Selected color:<span className="fw-bold">{item.color}</span>
          </h6>
        </div>

        {/* QUANTITY CONTROLS */}
        <div className="col-lg-2  text-center">
          <div className="btn-group" role="group">
            <button
              className="btn btn-outline-secondary"
              onClick={() => dispatch(cartActions.decreaseQty(item.id))}
            >
              −
            </button>

            <button className="btn btn-light" disabled>
              {item.quantity}
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => dispatch(cartActions.increaseQty(item.id))}
            >
              +
            </button>
          </div>
        </div>

        {/* REMOVE */}
        <div className="col-lg-2 text-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(cartActions.removeFromCart(item.id))}
          >
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
