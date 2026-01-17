import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { wishListActions } from '../store/wishListSlice';
import { cartActions } from '../store/cartSlice';

const WishListItem = ({ item }) => {
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

        <div className="col-md-2 text-center d-flex flex-column gap-2">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              dispatch(cartActions.addToCart(item));
              dispatch(wishListActions.removeFromWishList(item.id));
            }}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-outline-danger w-100"
            onClick={() =>
              dispatch(wishListActions.removeFromWishList(item.id))
            }
          >
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
