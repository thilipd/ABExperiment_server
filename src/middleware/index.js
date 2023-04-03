const { json, urlencoded } = require('body-parser');
const cors = require('cors');


const middleware = (app) => {

    // Use body parser
    app.use(json({ limit: '500mb' }));
    // url encode with bodyParser
    app.use(urlencoded({ limit: '500mb', extended: true }));
    // Cors
    app.use(cors());
}

module.exports = middleware;