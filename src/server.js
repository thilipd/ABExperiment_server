const { createServer } = require('http');
const app = require('./app');

const dbConfig = require('./utils/dbConfig/index');




const server = createServer(app);

console.log(process.env.PORT)

const port = process.env.PORT || 8000;


(async () => {

    server.listen(port, () => {
        console.log("Server is running on " + port);
    })

})();
