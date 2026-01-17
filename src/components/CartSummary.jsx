import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const navigate = useNavigate();
  const DeliveryFee = 99;

  let totalMRP = 0;
  let totalDiscount = 0;
  let totalAfterDiscount = 0;

  cartItems.forEach((item) => {
    totalMRP += item.original_price * item.quantity;
    totalAfterDiscount += item.current_price * item.quantity;
    totalDiscount += (item.original_price - item.current_price) * item.quantity;
  });

  const totalAmount = totalAfterDiscount + (cartItems.length ? DeliveryFee : 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      return;
    }
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/confirmorder' } });
    } else {
      navigate('/confirmorder');
    }
  };
  return (
    <div className="card p-3 shadow-sm">
      <h5 className="mb-3">PRICE DETAILS ({cartItems.length} Items)</h5>

      <div className="d-flex justify-content-between mb-1">
        <span>Total MRP</span>
        <span>₹{totalMRP}</span>
      </div>

      <div className="d-flex justify-content-between text-success mb-1">
        <span>Discount</span>
        <span>-₹{totalDiscount}</span>
      </div>

      <div className="d-flex justify-content-between mb-1">
        <span>Price After Discount</span>
        <span>₹{totalAfterDiscount}</span>
      </div>

      <div className="d-flex justify-content-between mb-1">
        <span>Delivery Fee</span>
        <span>₹{cartItems.length ? DeliveryFee : 0}</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between fw-bold mb-3">
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>

      <button
        className="btn btn-outline-primary w-100"
        onClick={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default CartSummary;
