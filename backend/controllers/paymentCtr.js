const stripe = require("stripe")(process.env.PRIVATE_API_KEY);
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const { client } = require('../config/paypal');

exports.pay = async (req, res) => {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
    });
    res.json({ message: null, client_secret: paymentIntent.client_secret });
}

exports.paypalcreate = async (req, res) => {
    const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: process.env.PAY_AMOUNT // Replace with the amount you want to charge
        }
      }]
    });
  
    try {
      const order = await client().execute(request);
      res.json({ id: order.result.id });
    } catch (error) {
      res.status(500).send(error.message);
    }    
}
exports.paypalcapture = async (req, res) => {
    const { orderID } = req.body;

    const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
  
    try {
      const capture = await client().execute(request);
      res.json(capture.result);
    } catch (error) {
      res.status(500).send(error.message);
    }
}
exports.paypalclient_id = async (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
}

