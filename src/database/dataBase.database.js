import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const CONNECT_DB = async () => {
    try {
        const connectInstance=await mongoose.connect('${process.env.MONGODB_URL}')
        console.log('MongoDB Connected: ${connectInstance.connection.host}');
    } catch (error) {
        console.log("MONGODB connection error:",error);
        process.exit(1)
        
    }
}
export default CONNECT_DB