import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { MdDelete } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { wishListActions } from '../store/wishListSlice';
import { useNavigate } from 'react-router-dom';
import { IoCall } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';

const Hoodie = () => {
  const products = useSelector((state) => state.products.products);

  const [active, setActive] = useState('*');

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});

  const hoodieProducts = products.filter((p) => p.category === 'hoodie');

  const filteredProducts =
    active === '*'
      ? hoodieProducts
      : hoodieProducts.filter((p) => p.type === active);

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
    <section className="shirt py-5">
      <div className="text-center ">
        <h1>
          Shirt<span className="text-primary"> Collection</span>
        </h1>
        <hr className="w-25 m-auto" />
      </div>
      <div className="container py-5">
        {/* Hoodie Type Buttons */}
        <div className="text-center mb-4">
          <button
            className={`btn me-2 ${
              active === '*' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setActive('*')}
          >
            All Hoodies
          </button>

          <button
            className={`btn me-2 ${
              active === 'custom' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setActive('custom')}
          >
            Custom Hoodie
          </button>

          <button
            className={`btn me-2 ${
              active === 'lightweight' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setActive('lightweight')}
          >
            Lightweight Hoodie
          </button>

          <button
            className={`btn ${
              active === 'oversized' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setActive('oversized')}
          >
            Oversized Hoodie
          </button>
        </div>

        <div className="row">
          {filteredProducts.map((product) => {
            const discountedPrice = Math.round(
              product.original_price -
                (product.original_price * product.discount_percentage) / 100
            );

            const elementFound = cartItems.some(
              (item) => item.id === product.id
            );

            return (
              <div key={product.id} className="col-md-4 mb-4 col-sm-6">
                <div className="card h-100 shadow-lg rounded">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt={product.item_name}
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

                      {elementFound ? (
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Hoodie;
