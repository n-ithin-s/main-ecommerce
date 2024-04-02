import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Checkout.css'; // Make sure to create this CSS file

function Checkout() {
  const { userName, phone, userId, email } = useContext(AuthContext);
  const location = useLocation();
  const { total, cartItems } = location.state;
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountedTotal, setDiscountedTotal] = useState(total);
  const navigate = useNavigate();
  const token1 = sessionStorage.getItem("token");
  const [showSpecialOffer, setShowSpecialOffer] = useState(true);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const makeOrder = async () => {
    const orderDetails = {
      user: userId,
      product_list: cartItems && cartItems.map((item) => item.id),
      total_price: discountedTotal,
    };

    try {
      await axios.post('http://localhost:8000/api/order/', orderDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token1}`,
        },
      });
      navigate(`/PAYMENT/${userId}/${token1}/${discountedTotal}`);
    } catch (err) {
      console.error("Error in making the Order:", err);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowSpecialOffer(show => !show);
    }, 1000); // Change interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  const handleApplyDiscount = () => {
    if (!discountApplied) {
      const discountAmount = total * 0.1; // 10% discount
      setDiscountedTotal(total - discountAmount);
      setDiscountApplied(true);
      setShowOrderConfirmation(true);
    }
    setTimeout(() => {
      setShowOrderConfirmation(false);
    }, 3000); // Adjust duration as needed
  };
  return (
    <div className="container checkout-container mt-5" style={{ backgroundColor: "#121212", color: "white" }}>
      <div className="row">
        {/* User Details Section */}
        <div className="col-lg-6 mb-4">
          <div className="card user-details-card" style={{ backgroundColor: "#303030", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ borderBottom: "1px solid #555", color: "#0d6efd" }}>User Details</h5>
              <div className="user-details">
                <div className="detail">
                  <span>User Name:</span>
                  <span>{userName}</span>
                </div>
                <div className="detail">
                  <span>User ID:</span>
                  <span>{userId}</span>
                </div>
                <div className="detail">
                  <span>Email:</span>
                  <span>{email}</span>
                </div>
                <div className="detail">
                  <span>Phone:</span>
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="col-lg-6">
          <div className="card order-summary-card" style={{ backgroundColor: "#303030", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ borderBottom: "1px solid #555", color: "#0d6efd" }}>Order Summary</h5>
              <div className="table-responsive">
                <table className="table text-white">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="total-price mt-3">
                <strong>Total Price:</strong>
                <span style={{ color: "#0d6efd"}}> ${discountedTotal.toFixed(2)}</span>
              </div>
              {!discountApplied && (
                <div className="discount-section mt-3">
                  <input type="text" placeholder="Enter Coupon Code" className="form-control coupon-input" />
                  <button className="btn btn-secondary apply-discount-btn mt-1" onClick={handleApplyDiscount}>Apply</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Make Order Button */}
      <button className='btn btn-primary make-order-btn mt-3' onClick={makeOrder} style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}>Make Order</button>

      {/* Special Offer Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className={`promo-banner ${showSpecialOffer ? 'fade-in' : 'fade-out'}`} style={{ backgroundColor: "#303030", padding: "15px", borderRadius: "10px" }}>
            <h5>Special Offer!</h5>
            <p>Get 10% off on your next purchase. Use code: SPECIAL10</p>
          </div>
        </div>
      </div>


                {/* Order Confirmation Animation */}
      {showOrderConfirmation && (
        <div className="order-confirmation-animation">
          <div className="order-confirmation-content">
            <span className="material-icons">check_circle</span>
            <p>"Celebration Time! Discount Unlocked!"</p>
          </div>
        </div>
      )}


    </div>
    
  );
}

export default Checkout;
