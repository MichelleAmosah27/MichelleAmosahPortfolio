
import express from "express";

import {
    createContact,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById,
    deleteAllContacts
} from "../controllers/contacts.js"

//wire in express
const router = express.Router();

//REST API
router.get('/', getAllContacts) //READ - performed by only the browser
router.get('/:id', getContactById) //READ
router.post('/', createContact) // CREATE
router.put('/:id', updateContactById)//UPDATE
router.delete('/:id', deleteContactById) //DELETE
router.delete('/', deleteAllContacts) //DELETE ALL

export default router;
