

//CRUD operations for project model

import contactsModel from "../models/contacts.js";

//read all contacts
export const getAllContacts = async (req, res) => {

    try {

        const contacts = await contactsModel.find();
        res.status(200).json(contacts);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
  
}

//READ a single contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await contactsModel.findById(req.params.id);
        if(!contact){
            //if object is empty
            return res.status(404).json({message:"Contact not found!"}); 
        }
        res.status(200).json(project);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }
  
}

//CREATE a new contact
export const createContact = async (req, res) => {
    try {

        const newContact = new contactsModel(req.body);
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    } 
}

//UPDATE a contact by ID
export const updateContactById = async (req, res) => {
    try {
        const updatedContact = await contactsModel.findByIdAndUpdate(req.params.id, req.body, {new:true});//verify if the project exist
        if(!updatedContact){
            //if object is empty or does not exist
            return res.status(404).json({message:"Contact not found!"}); 
        }
        res.status(200).json(updatedContact);    
    } catch (error) {  
        res.status(500).json({message: error.message})
    }  
}

//DELETE contact by ID
export const deleteContactById = async (req, res) => {
    try {
        const deletedContact = await contactsModel.findByIdAndDelete(req.params.id);
        if(!deletedContact){
            //if object is empty or does not exist
            return res.status(404).json({message:"Contact not found!"}); 
        }
        res.status(200).json(deletedContact);    
    } catch (error) {  
        res.status(500).json({message: error.message});
    }  
}

export const deleteAllContacts = async (req, res) => {

    try {
        const users = await contactsModel.deleteMany({});
        res.status(200).json(users);
        
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
}




