
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    
    title: String,
    firstName: String,
    lastName: String,
    email: String,
    completion: Date,
    description: String
});


export default mongoose.model("education", educationSchema);