const OrderHistory = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>No orders yet 😢</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🛒 My Orders</h2>

      <div className="row">
        {orders
          .slice()
          .reverse() // show latest first
          .map((order) => (
            <div
              key={order.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
            >
              <div className="card shadow-lg border-0  h-100">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                  <span>Order #{order.id}</span>
                  <span className="badge bg-light text-primary">
                    {new Date(order.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="card-body d-flex flex-column gap-2">
                  <div className="card-title d-flex justify-content-between mb-1">
                    <h6>Payment Method:</h6>
                    <h6>{order.paymentMethod}</h6>
                  </div>
                  <div className="card-title d-flex justify-content-between mb-1 fw-bold">
                    <h6> Total Amount:</h6>
                    <h6>{order.totalAmount}TK</h6>
                  </div>

                  <h5 className="card-title fw-bold">Items:</h5>
                  <ul className="list-group list-group-flush mb-3">
                    {order.items.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center p-2"
                      >
                        <span>{item.item_name}</span>
                        <span>
                          {item.quantity} × TK{item.current_price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderHistory;
