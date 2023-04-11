const uuid4 = require('uuid4');
const stripe = require('stripe')('sk_test_51MuC3qSCACHCuQofpBW3JjWfuQfuJVcainjS20BDneNWgD1r4cjnbX14LUZT6KO8oF5HSfOqIUgu0mEcSNpklstN00poJM0kpg');
const paypal = require('paypal-rest-sdk');


paypal.configure({
    mode:'sandbox',
    client_id:'AXAA8p-HBKmbPNwR4BdGxYCaQpz-IYHcfesi6QkyIiuVA-2V7Kv1Pxi1fL5bFspveD9LSkX4JO9HPyBU',
    client_secret: 'ELdqAq39pVt1UUwi9Mqn9_aoxI7manzAB1iME73AesR-5C-ykq2LhlsMFWc3w5uiCnikX_L-1kisMzhl'
})




const paymentController  = {

    stripe: async(req, res)=> {

        const { token, service } = req.body;
        const transactionKey = uuid4();
    
    
        return stripe.customers.create({
            email: token.email,
            source: token.id,
        }).then((customer) => {
            stripe.paymentIntents.create({
                amount: service.price,
                customer: customer.id,
                currency: 'INR',
                receipt_email: token.email,
                description: service.name,
                payment_method_types: ['card'],
            }).then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                res.json(err)
            })
        })

    },

    paypal: (req, res) => {
       const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/success",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item1",
                        "sku": "item",
                        "price": "25.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "2.00"
                },
                "description": "This is the payment description."
            }]
        };
        
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
        });
    
    }

};


module.exports = paymentController