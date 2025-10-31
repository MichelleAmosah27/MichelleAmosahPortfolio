
import express from "express";

import {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUsersById,
    deleteAllUsers,
    loginUser
} from "../controllers/users.js"

import authMiddleware from "../middlewares/auth.js"


//wire in express
const router = express.Router();

//REST API
router.get('/', authMiddleware, getAllUsers) //READ - performed by only the browser
router.get('/:id', authMiddleware, getUsersById) //READ
router.post('/', createUser) // CREATE
router.put('/:id', authMiddleware,updateUserById)//UPDATE
router.delete('/:id', authMiddleware,deleteUserById) //DELETE
router.delete('/', authMiddleware,deleteAllUsers) //DELETE ALL
router.post('/login', loginUser) //LOGIN



export default router;