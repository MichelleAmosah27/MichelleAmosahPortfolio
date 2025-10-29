
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
});


export default mongoose.model("Users", usersSchema);