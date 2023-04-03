const { Router } = require('express');
const authController = require('../../controllers');


const router = Router();

router.get('/test', (req, res) => {
    res.send('test');
})


router.post('/register', (req, res) => {
    authController.register(req, res)
})

router.post('/login', (req, res) => {
    authController.login(req, res)
})



module.exports = router;