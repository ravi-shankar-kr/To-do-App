import mongoose from "mongoose";
import config from "./config.js";

async function conntectDB() {
    
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Databse is connected");
        
    } catch (error) {
        console.log(error);
        
    }
}


export default conntectDB