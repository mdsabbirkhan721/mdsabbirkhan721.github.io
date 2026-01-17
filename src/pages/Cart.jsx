import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products.products);

  const getRelatedProducts = (category, currentId) => {
    return products.filter(
      (product) => product.category === category && product.id !== currentId
    );
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };
  const getCategoryRoute = (category) => {
    if (category === 'hoodie') return '/hoodie';
    if (category === 'shirt') return '/shirt';
    if (category === 'tshirt') return '/tshirt';
    if (category === 'punjabi') return '/punjabi';

    return '/';
  };
  return (
    <div className="container my-5">
      <div className="row">
        {/* LEFT: Cart Items */}
        <div className="col-lg-8 col-md-8 col-12">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h4 className="fs-1 fw-bold">Your cart is empty</h4>
              <Link to="/" className="btn btn-primary my-4">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="col-lg-4 col-md-4 col-12">
          <CartSummary />
        </div>
      </div>

      {/* PER PRODUCT INFO + RELATED PRODUCTS */}
      {cartItems.map(
        (item) =>
          item.info && (
            <div key={item.id} className="mt-4">
              {/* INFO BOX */}
              <div className="alert alert-info">
                <strong>{item.item_name}</strong>
                {item.info.messages.map((msg, i) => (
                  <p key={i} className="mb-1">
                    • {msg}
                  </p>
                ))}
              </div>

              {/* RELATED PRODUCTS SLIDER */}
              {getRelatedProducts(item.category, item.id).length > 0 && (
                <div className="">
                  <h3 className="my-5">Related Products</h3>
                  <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    itemClass="px-2"
                  >
                    {getRelatedProducts(item.category, item.id).map(
                      (product) => (
                        <div key={product.id} className="card">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.item_name}
                          />
                          <div className="card-body text-center">
                            <h6 className="card-title">{product.item_name}</h6>

                            <Link
                              to={getCategoryRoute(product.category)}
                              className="btn btn-outline-success rounded-pill"
                            >
                              View Now
                            </Link>
                          </div>
                        </div>
                      )
                    )}
                  </Carousel>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Cart;
