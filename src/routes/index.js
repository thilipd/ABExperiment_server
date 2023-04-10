const authRouter = require('../componenets/Authentication/v1/Routes');
const paymentRouter = require('../componenets/Payment/v1/Routes');


const router = (app) => {

    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/payment', paymentRouter);

    app.get('/test', (req, res) => {
        res.send('test');
    })
}


module.exports = router;