const mongoose = require("mongoose");

async function connectDB () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connected to ${conn.connection.host}`);
    } catch(err) {
        console.log(err)
        process.exit(1);
    };   

};

module.exports = connectDB;