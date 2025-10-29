
//CRUD operations for project model

import projectModel from "../models/projects.js";

//read all projects
export const getAllProjects = async (req, res) => {

    try {

        const projects = await projectModel.find();
        res.status(200).json(projects);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
  
}

//READ a single project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await projectModel.findById(req.params.id);
        if(!project){
            //if object is empty
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(project);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }
  
}

//CREATE a new project
export const createProject = async (req, res) => {
    try {

        const newProject = new projectModel(req.body);
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    } 
}

//UPDATE a new project by ID
export const updateProjectById = async (req, res) => {
    try {
        const updatedProject = await projectModel.findByIdAndUpdate(req.params.id, req.body, {new:true});//verify if the project exist
        if(!updatedProject){
            //if object is empty or does not exist
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(updatedProject);    
    } catch (error) {  
        res.status(500).json({message: error.message})
    }  
}

//DELETE by ID
export const deleteProjectById = async (req, res) => {
    try {
        const deletedProject = await projectModel.findByIdAndDelete(req.params.id);
        if(!deletedProject){
            //if object is empty or does not exist
            return res.status(404).json({message:"Project not found!"}); 
        }
        res.status(200).json(deletedProject);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }  
}


export const deleteAllProjects = async (req, res) => {

    try {
        const users = await projectModel.deleteMany({});
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}




