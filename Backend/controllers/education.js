

//CRUD operations for project model

import educationModel from "../models/education.js";

//read all education objects
export const getAllEducation = async (req, res) => {

    try {

        const education = await educationModel.find();
        res.status(200).json(education);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
  
}

//READ a single education object by ID
export const getEducationById = async (req, res) => {
    try {
        const education = await educationModel.findById(req.params.id);
        if(!education){
            //if object is empty
            return res.status(404).json({message:"Education not found!"}); 
        }
        res.status(200).json(education);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }
  
}

//CREATE a new education object
export const createEducation = async (req, res) => {
    try {

        const newEducation = new educationModel(req.body);
        const savedEducation = await newEducation.save();
        res.status(200).json(savedEducation);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    } 
}

//UPDATE a new project by ID
export const updateEducationById = async (req, res) => {
    try {
        const updatedEducation = await educationModel.findByIdAndUpdate(req.params.id, req.body, {new:true});//verify if the education exist
        if(!updatedEducation){
            //if object is empty or does not exist
            return res.status(404).json({message:"Education not found!"}); 
        }
        res.status(200).json(updatedEducation);    
    } catch (error) {  
        res.status(500).json({message: error.message})
    }  
}

//DELETE by ID
export const deleteEducationById = async (req, res) => {
    try {
        const deletedEducation = await educationModel.findByIdAndDelete(req.params.id);
        if(!deletedEducation){
            //if object is empty or does not exist
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(deletedEducation);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }  
}


export const deleteAllEducation = async (req, res) => {

    try {
        const users = await educationModel.deleteMany({});
        res.status(200).json(users);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
}




