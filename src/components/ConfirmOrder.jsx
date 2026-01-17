import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../store/cartSlice'; // adjust path if needed

const ConfirmOrder = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

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

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    const orderData = {
      items: cartItems,
      paymentMethod,
      totalAmount,
      date: new Date().toLocaleString(),
      id: Date.now(),
    };

    console.log('Order Data:', orderData);
    // SAVE ORDER HISTORY
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    localStorage.setItem(
      'orders',
      JSON.stringify([...existingOrders, orderData])
    );
    dispatch(cartActions.clearCart());

    navigate('/order-success', { state: orderData });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-5 mb-4">
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

            <div className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Delivery Details</h5>

            <form
              className="row g-3 needs-validation"
              onSubmit={handlePlaceOrder}
              noValidate
            >
              <div className="col-md-6">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                />
              </div>

              <div className="col-md-12">
                <label className="form-label" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>

              {/* PAYMENT METHOD */}
              <div className="col-12">
                <h6 className="mb-2">Payment Method</h6>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash on Delivery
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="bkash"
                    value="bKash"
                    checked={paymentMethod === 'bKash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="bkash">
                    bKash
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="nagad"
                    value="Nagad"
                    checked={paymentMethod === 'Nagad'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="nagad">
                    Nagad
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-success w-100">
                  CONFIRM ORDER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
