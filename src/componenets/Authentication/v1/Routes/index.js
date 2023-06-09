const { Router } = require('express');
const authController = require('../../controllers');


const router = Router();

router.post('/test', (req, res) => {

    console.log(req.body)
    res.send('test');
})


router.post('/register', (req, res) => {
    authController.register(req, res)
})

router.post('/login', (req, res) => {
    authController.login(req, res)
})

router.get('/', (req, res)=> {
    authController.connect(req, res);
})



module.exports = router;