const http = require("http");
const app = require("./src/app");
require("dotenv").config();
const connectDB = require("./src/connectDB");
const port = 3000 || process.env.PORT

const server = http.createServer(app);

async function startServer () {
    await connectDB();
    server.listen(port, () => {
        console.log(`Our server is listening on port ${port}`)
    });
};

startServer();




