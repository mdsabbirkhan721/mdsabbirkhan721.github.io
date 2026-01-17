import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const cart = useSelector((store) => store.cart);
  const wishListItem = useSelector((state) => state.wishlist);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  if (!isLoggedIn) {
    return (
      <div className="container mt-5">
        <h4 className="fs-1 fw-bold text-center text-secondary">
          Please log in to see your profile
        </h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg  rounded-4">
            <div className="card-header bg-dark text-white text-center rounded-top-4 py-4">
              <Link className="navbar-brand" to="/">
                <img
                  className="img-fluid rounded"
                  src="/images/1765431524778.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
              </Link>
              <h4 className="mt-3">{user?.name || 'User'}</h4>
              <small className="text-light">Member</small>
            </div>

            <div className="card-body p-4">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-semibold">Email</span>
                  <span className="text-muted">
                    {user?.email || 'example@mail.com'}
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-semibold">Phone</span>
                  <span className="text-muted">{user.phone}</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-semibold">Adress</span>
                  <span className="text-muted">{user.address}</span>
                </li>
              </ul>

              <div className="row text-center ">
                <div className="col">
                  <Link
                    to="/orderhistory"
                    className="text-dark text-decoration-none"
                  >
                    <FaClipboardList size={30} />
                  </Link>
                  <p>Orders</p>
                </div>
                <div className="col ">
                  <Link
                    className="text-dark text-decoration-none position-relative"
                    to="/wishlist"
                  >
                    <FaHeart size={30} />
                    <span className="badge bg-danger bag-item-count">
                      {wishListItem.length}
                    </span>
                  </Link>
                  <p>Wishlist</p>
                </div>
                <div className="col  ">
                  <Link
                    className="text-dark text-decoration-none position-relative "
                    to="/cart"
                  >
                    <FaShoppingCart size={30} />
                    <span className="badge bg-danger bag-item-count">
                      {cart.length}
                    </span>
                  </Link>
                  <p>Cart</p>
                </div>
              </div>

              <div className="d-grid ">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
