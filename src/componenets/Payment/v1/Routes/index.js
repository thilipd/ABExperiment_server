const { Router } = require('express');
const paymentController = require('../../controllers')

const router = Router();

router.post('/test', (req, res) => {

    console.log(req.body)
    res.send('test');
})


router.post('/stripe', (req, res) => {

    paymentController.stripe(req, res);
   
})


router.post('/paypal', )


// sk_test_51MuC3qSCACHCuQofpBW3JjWfuQfuJVcainjS20BDneNWgD1r4cjnbX14LUZT6KO8oF5HSfOqIUgu0mEcSNpklstN00poJM0kpg


module.exports = router;


