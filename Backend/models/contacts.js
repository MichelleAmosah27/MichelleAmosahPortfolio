
import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
    name: String,
    firstName: String,
    lastName: String,
    email: String,
});


export default mongoose.model("Contact", contactsSchema);