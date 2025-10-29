
import express from "express";

import {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUsersById,
    deleteAllUsers
} from "../controllers/users.js"


//wire in express
const router = express.Router();

//REST API
router.get('/', getAllUsers) //READ - performed by only the browser
router.get('/:id', getUsersById) //READ
router.post('/', createUser) // CREATE
router.put('/:id', updateUserById)//UPDATE
router.delete('/:id', deleteUserById) //DELETE
router.delete('/', deleteAllUsers) //DELETE ALL


export default router;