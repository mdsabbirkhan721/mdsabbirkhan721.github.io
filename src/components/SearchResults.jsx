import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';
import { wishListActions } from '../store/wishListSlice';
import { MdDelete } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCall, IoLogoWhatsapp } from 'react-icons/io5';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart);
  const [activeType, setActiveType] = useState('*');
  const [selectedOptions, setSelectedOptions] = useState({});

  const query =
    new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  //  Filter products by name
  let filteredProducts = products.filter((p) =>
    p.item_name.toLowerCase().includes(query)
  );

  //  Apply type filter if selected
  if (activeType !== '*') {
    filteredProducts = filteredProducts.filter((p) => p.type === activeType);
  }

  const productTypes = Array.from(
    new Set(filteredProducts.map((p) => p.type).filter(Boolean))
  );

  const handleSelect = (id, type, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: { ...prev[id], [type]: value },
    }));
  };

  return (
    <div className="container py-5">
      <h2>Search Results for "{query}"</h2>

      {/*  Type filter buttons */}
      <div className="text-center mb-4">
        <button
          className={`btn me-2 ${
            activeType === '*' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setActiveType('*')}
        >
          All
        </button>
        {productTypes.map((type) => (
          <button
            key={type}
            className={`btn me-2 ${
              activeType === type ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setActiveType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/*  Products grid */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          filteredProducts.map((product) => {
            const discountedPrice = Math.round(
              product.original_price -
                (product.original_price * product.discount_percentage) / 100
            );

            const isInCart = cartItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="col-12  col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow-lg rounded">
                  <img
                    src={product.image}
                    alt={product.item_name}
                    className="card-img-top img-fluid"
                  />

                  <div className="card-body d-flex flex-column">
                    <div className="rating small text-muted mb-1">
                      {product.rating?.stars ?? 0} ⭐ |{' '}
                      {product.rating?.count ?? 0}
                    </div>

                    <div className="fw-semibold">{product.item_name}</div>

                    <div className="price mt-2">
                      <span className="fw-bold text-success me-2">
                        Rs {discountedPrice}
                      </span>
                      <span className="text-muted text-decoration-line-through me-2 small">
                        Rs {product.original_price}
                      </span>
                      <span className="text-danger small">
                        ({product.discount_percentage}% OFF)
                      </span>
                    </div>

                    {/* Size selection */}
                    <div className="item-size fw-bold text-center text-md-start mt-2">
                      <h6 className="mt-2">Select Size:</h6>
                      {product.sizes?.map((size) => (
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

                    {/* Color selection */}
                    <div className="item-color fw-bold text-center text-md-start mt-2">
                      <h6 className="mt-2">Select Color:</h6>
                      {product.colors?.map((color) => (
                        <button
                          key={color}
                          className={`btn btn-sm me-2 mb-1 ${
                            selectedOptions[product.id]?.color === color
                              ? 'btn-dark'
                              : 'btn-outline-dark'
                          }`}
                          onClick={() =>
                            handleSelect(product.id, 'color', color)
                          }
                        >
                          {color}
                        </button>
                      ))}
                    </div>

                    <div className="mt-auto d-flex flex-column gap-2">
                      <button
                        className="btn btn-success"
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
                        <IoMdAddCircleOutline /> Add to Wishlist
                      </button>

                      {isInCart ? (
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch(cartActions.removeFromCart(product.id))
                          }
                        >
                          <MdDelete /> Remove From Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          disabled={
                            !selectedOptions[product.id]?.size ||
                            !selectedOptions[product.id]?.color
                          }
                          onClick={() =>
                            dispatch(
                              cartActions.addToCart({
                                ...product,
                                current_price: discountedPrice,
                                size: selectedOptions[product.id]?.size,
                                color: selectedOptions[product.id]?.color,
                              })
                            )
                          }
                        >
                          <IoMdAddCircleOutline /> Add to Cart / Buy Now
                        </button>
                      )}

                      <a
                        className="btn btn-outline-primary"
                        href="tel:+8801XXXXXXXXX"
                      >
                        <IoCall /> Call for order
                      </a>

                      <a
                        href="https://wa.me/8801XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <IoLogoWhatsapp /> WhatsApp order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
