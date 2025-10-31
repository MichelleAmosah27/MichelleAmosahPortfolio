
import mongoose from "mongoose";
import bcrypt from "bcrypt"

const usersSchema = new mongoose.Schema({
    
    name: String,
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true, select: false},
    created: {type:Date, default: Date.now},
    updated: {type:Date, default: Date.now}
});


//hash password before saving
usersSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next(); // only hash if modified
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare entered password with hashed password
usersSchema.methods.comparePassword = async function(userPassword){
    return await bcrypt.compare(userPassword, this.password);
}

export default mongoose.model("Users", usersSchema);