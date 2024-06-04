// src/features/Payment/PayPal/PayPalButton.js
import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const PayPalButton = () => {
  const paypalRef = useRef();

  useEffect(() => {
    const loadPayPalScript = (clientId) => {
      return new Promise((resolve, reject) => {
        if (window.paypal) {
          resolve(window.paypal);
          return;
        }

        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
        script.onload = () => resolve(window.paypal);
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const fetchPayPalClientId = async () => {
      try {
        const response = await axios.get('/payment/paypal/client-id');
        const clientId = response.data.clientId;
        loadPayPalScript(clientId).then((paypal) => {
          paypal.Buttons({
            createOrder: async (data, actions) => {
              const res = await axios.post('/payment/paypal/create-order');
              return res.data.id;
            },
            onApprove: async (data, actions) => {
              const res = await axios.post('/payment/paypal/capture-order', {
                orderID: data.orderID,
              });
              alert('Transaction completed by ' + res.data.payer.name.given_name);
            },
            onError: (err) => {
              console.error('PayPal Checkout onError', err);
            },
          }).render(paypalRef.current);
        }).catch((error) => {
          console.error('Failed to load PayPal script', error);
        });
      } catch (error) {
        console.error('Failed to fetch PayPal client ID', error);
      }
    };

    fetchPayPalClientId();
  }, []);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
