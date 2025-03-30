// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('mongodb connected successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default connectDB;
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("backend/.env") }); // Specify correct path

console.log("MONGO_URI:", process.env.MONGO_URI); // Check if it's loaded

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};

export default connectDB;

