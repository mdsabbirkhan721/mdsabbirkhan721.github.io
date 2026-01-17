import { useLocation, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const orderData = location.state;

  return (
    <div className="container my-5 text-center">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>
        Payment Method: <strong>{orderData.paymentMethod}</strong>
      </p>
      <p>
        Total Amount: <strong>₹{orderData.totalAmount}</strong>
      </p>

      <div className="d-flex flex-column align-items-center gap-3 mt-3">
        <Link to="/" className="btn btn-outline-primary fw-bold">
          Continue Shopping
        </Link>

        <Link to="/orderhistory" className="btn btn-outline-success  fw-bold ">
          Order History
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
