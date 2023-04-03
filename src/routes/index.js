const authRouter = require('../componenets/Authentication/v1/Routes')


const router = (app) => {

    app.use('/api/v1/auth', authRouter);

    app.get('/test', (req, res) => {
        res.send('test');
    })
}


module.exports = router;