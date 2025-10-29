
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    
    name: String,
    firstName: String,
    lastName: String,
    email: String,
    completion: Date,
    description: String
});


export default mongoose.model("Project", projectSchema);