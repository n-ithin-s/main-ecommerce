import '../style/Payment.css';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import braintree from 'braintree-web';
import { AuthContext } from '../AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment() {
  const { userId, userName } = useContext(AuthContext);
  const { total } = useParams();
  const navigate = useNavigate();
  const [paymentMethodNonce, setPaymentMethodNonce] = useState('');
  const [clientToken, setClientToken] = useState('');
  const token1 = sessionStorage.getItem("token");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/payment/gettoken/${userId}/${token1}/`)
      .then(response => {
        setClientToken(response.data.clientToken);

        braintree.client.create({
          authorization: response.data.clientToken,
        }, (clientErr, clientInstance) => {
          if (clientErr) {
            console.error(clientErr);
            return;
          }
        });
      })
      .catch(error => {
        console.error('Error fetching client token:', error);
      });
  }, [userId, token1]);

  const handlePayment = async () => {
    try {
      if (!paymentMethodNonce) {
        console.error('Payment method not selected');
        return;
      }

      const response = await axios.post(`http://localhost:8000/api/payment/process/${userId}/${token1}/`, {
        paymentMethodNonce,
        amount: total,
      });

      if (response.data.success) {
        const transactionDetails = response.data.transaction;
        
        // Display toast notification
        toast.success(`Payment successful! Transaction ID: ${transactionDetails.id}, Amount: ${transactionDetails.amount}`, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          onClose: () => navigate('/MYORDER'),
          bodyClassName: "toast-dark", // Apply dark theme class
        });
      } else {
        console.error('Payment failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethodNonce(event.target.value);
  };

  return (
    <div className='p-container p-0'>
      <ToastContainer
        bodyClassName="toast-dark" // Apply dark theme class
      />
      <div className='p-card px-4'>
        <h2 className='h8 py-3 text-white'>Payment Gateway Page</h2>
        <div className='row gx-3'>
          <div className='col-12'>
            <div className='d-flex flex-column'>
              <input className="form-control mb-3" type="text" placeholder="Name" value={userName} readOnly />
            </div>
          </div>
          <div className='col-12'>
            <div className='d-flex flex-column'>
              <select className='form-control mb-3 custom-dropdown' onChange={handlePaymentMethodChange} value={paymentMethodNonce}>
                <option value="">Select Payment Method</option>
                <option value="fake-valid-nonce">Credit Card</option>
                <option value="fake-android-pay-nonce">Debit card</option>
              </select>
            </div>
          </div>
          <div className='col-12'>
            <div className='d-flex flex-column'>
              <input className="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
            </div>
          </div>
          <div className='col-12'>
            <button className="p-btn btn btn-primary mb-3" onClick={handlePayment}>
              <span className="ps-3">Pay ${total}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
