import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { MdDelete } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { wishListActions } from '../store/wishListSlice';
import { useNavigate } from 'react-router-dom';
import { IoCall } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';

const Men = () => {
  const products = useSelector((state) => state.products.products);

  const [active, setActive] = useState('*');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const filteredProducts =
    active === '*' ? products : products.filter((p) => p.category === active);

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelect = (productId, type, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }));
  };

  return (
    <div className="container py-5">
      {/* Filter Buttons */}
      <div className="text-center mb-4 ">
        <button
          className={`btn me-2 ${
            active === '*' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setActive('*')}
        >
          All
        </button>
        <button
          className={`btn me-2 ${
            active === 'shirt' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setActive('shirt')}
        >
          Shirt
        </button>
        <button
          className={`btn me-2 ${
            active === 'tshirt' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setActive('tshirt')}
        >
          T-Shirt
        </button>
        <button
          className={`btn ${
            active === 'hoddie' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setActive('hoddie')}
        >
          Hoddie
        </button>
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((product) => {
          const discountedPrice = Math.round(
            product.original_price -
              (product.original_price * product.discount_percentage) / 100
          );
          const elementFound = cartItems.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="col-md-4 mb-4 col-sm-6">
              <div className="card h-100 shadow-lg rounded">
                <img
                  src={product.image}
                  className="card-img-top img-fluid "
                  alt={product.item_name}
                />

                <div className="card-body d-flex flex-column">
                  <div className="rating small text-muted mb-1 text-center text-md-start">
                    {product.rating?.stars ?? 0} ⭐ |{' '}
                    {product.rating?.count ?? 0}
                  </div>

                  <div className="item-name fw-semibold text-center text-md-start">
                    {product.item_name}
                  </div>

                  <div className="price mt-2 text-center text-md-start">
                    <span className="current-price fw-bold text-success me-2">
                      Rs {discountedPrice}
                    </span>
                    <span className="original-price text-muted text-decoration-line-through me-2 small">
                      Rs {product.original_price}
                    </span>
                    <span className="discount text-danger small">
                      ({product.discount_percentage}% OFF)
                    </span>
                  </div>

                  <div className="item-size fw-bold text-center text-md-start">
                    <h6>Select Size:</h6>
                    {['sm', 'md', 'lg', 'xl'].map((size) => (
                      <button
                        key={size}
                        className={`btn btn-sm me-2 mb-1 ${
                          selectedOptions[product.id]?.size === size
                            ? 'btn-primary'
                            : 'btn-outline-primary'
                        }`}
                        onClick={() => handleSelect(product.id, 'size', size)}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="item-color fw-bold text-center text-md-start mt-2">
                    <h6>Select Color:</h6>
                    {['black', 'white', 'blue'].map((color) => (
                      <button
                        key={color}
                        className={`btn btn-sm me-2 mb-1 ${
                          selectedOptions[product.id]?.color === color
                            ? 'btn-dark'
                            : 'btn-outline-dark'
                        }`}
                        onClick={() => handleSelect(product.id, 'color', color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>

                  <div className="mt-auto d-flex flex-column gap-2">
                    <button
                      className="btn btn-success w-100 "
                      disabled={
                        !selectedOptions[product.id]?.size ||
                        !selectedOptions[product.id]?.color
                      }
                      onClick={() =>
                        dispatch(
                          wishListActions.addToWishList({
                            ...product,
                            current_price: discountedPrice,
                            size: selectedOptions[product.id]?.size,
                            color: selectedOptions[product.id]?.color,
                          })
                        )
                      }
                    >
                      <IoMdAddCircleOutline className="me-1" />
                      Add to Wishlist
                    </button>
                    {elementFound ? (
                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          dispatch(cartActions.removeFromCart(product.id))
                        }
                      >
                        <MdDelete className="me-1" />
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        disabled={
                          !selectedOptions[product.id]?.size ||
                          !selectedOptions[product.id]?.color
                        }
                        className="btn btn-success w-100 "
                        onClick={() => {
                          dispatch(
                            cartActions.addToCart({
                              ...product,
                              current_price: discountedPrice,

                              size: selectedOptions[product.id]?.size,
                              color: selectedOptions[product.id]?.color,
                            })
                          );
                          navigate('/cart');
                        }}
                      >
                        <IoMdAddCircleOutline className="me-1" />
                        Add to Cart/Buy Now
                      </button>
                    )}
                    <a
                      className="w-100 btn btn-outline-primary "
                      href="tel:+8801XXXXXXXXX"
                    >
                      <IoCall className="me-2 fs-3" /> Call for order
                    </a>

                    <a
                      href="https://wa.me/8801XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" w-100 btn btn-outline-primary   "
                    >
                      <IoLogoWhatsapp className="me-2 fs-3" /> Whattsapp order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Men;
