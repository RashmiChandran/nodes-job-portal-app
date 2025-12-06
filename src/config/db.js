const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("MONGO_URI from env:", process.env.MONGO_URI);

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "job_portal",
        });
        console.log(`MongoDB Connected:${conn.connection.host}`);
    }
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;