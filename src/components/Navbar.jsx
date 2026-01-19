import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const base = import.meta.env.BASE_URL;

const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const wishListItem = useSelector((state) => state.wishlist);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="img-fluid rounded"
            src={`${base}images/1765431524778.jpg`}
            alt="Logo"
            width="70"
            height="70"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shirt">
                Shirt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tshirt">
                T-Shirt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/punjabi">
                Punjabi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hoodie">
                Hoodie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/*  Search Bar */}
          <form
            className="d-flex me-3 mb-2 mb-lg-0"
            role="search"
            onSubmit={handleSearch}
          >
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success btn-sm" type="submit">
              Search
            </button>
          </form>

          {/* Login / Profile */}
          {isLoggedIn ? (
            <Link to="/profile" className="text-light me-3 mb-2">
              <FaUserCircle size={24} />
            </Link>
          ) : (
            <Link to="/login" className="btn btn-outline-light  me-2 btn-sm">
              Login
            </Link>
          )}

          {/* Cart */}
          <Link
            className="text-light text-decoration-none position-relative me-3"
            to="/cart"
          >
            <FaShoppingCart size={25} />
            <span className="badge bg-danger bag-item-count">
              {cart.length}
            </span>
          </Link>

          {/* Wishlist */}
          <Link
            className="text-light text-decoration-none position-relative"
            to="/wishlist"
          >
            <FaHeart size={25} />
            <span className="badge bg-danger bag-item-count">
              {wishListItem.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
