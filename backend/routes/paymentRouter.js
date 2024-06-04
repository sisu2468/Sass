const path = require('path')
const paymentCtr = require(path.resolve('./controllers/paymentCtr'))

module.exports = (app) => {
    app.post('/api/payment/:gateway', paymentCtr.pay)
    app.post('/api/payment/paypal/create-order', paymentCtr.paypalcreate)
    app.post('/api/payment/paypal/capture-order', paymentCtr.paypalcapture)
    app.get('/api/payment/paypal/client-id', paymentCtr.paypalclient_id)
}