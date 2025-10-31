

//CRUD operations for project model

import usersModel from "../models/users.js";
import generateToken from "../utils/jwt.js";

//read all projects
export const getAllUsers = async (req, res) => {

    try {

        const users = await usersModel.find();
        res.status(200).json(users);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
  
}

export const deleteAllUsers = async (req, res) => {

    try {
        const users = await usersModel.deleteMany({});
        res.status(200).json(users);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
}

//READ a single user by ID
export const getUsersById = async (req, res) => {
    try {
        const users = await usersModel.findById(req.params.id);
        if(!users){
            //if object is empty
            return res.status(404).json({message:"User not found!"}); 
        }
        res.status(200).json(users);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }
  
}

//CREATE a new user
export const createUser = async (req, res) => {
    try {

        const newUsers = new usersModel(req.body);
        const savedUsers = await newUsers.save();

        //token
        const token = generateToken(savedUsers);

        res.status(200).json({message:"User registered successfully",user:savedUsers, token});    
    } catch (error) {  
        res.status(500).json({message: error.message});
    } 
}

//UPDATE a user by ID
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await usersModel.findByIdAndUpdate(req.params.id, req.body, {new:true});//verify if the project exist
        if(!updatedUser){
            //if object is empty or does not exist
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(updatedUser);    
    } catch (error) {  
        res.status(500).json({message: error.message})
    }  
}

//DELETE by ID
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await usersModel.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            //if object is empty or does not exist
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(deletedUser);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }  
}

//user login
export const loginUser = async(req, res) =>{

    try {
        const {email, password} = req.body;
        const user = await usersModel.findOne({email}).select("+password")

        if(!user){
            return res.status(404).json({message: "User not found"});// 404 HTTP status code for not found
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid password"});
        }

        const token = generateToken(user)

        return res.status(200).json({message: "Login successful", user, token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}




