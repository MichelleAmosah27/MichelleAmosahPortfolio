
import express from "express";

import{
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    deleteAllProjects
} from "../controllers/project.js";

import authMiddleware from "../middlewares/auth.js";

//wire in express
const router = express.Router();

//REST API
router.get('/',authMiddleware, getAllProjects) //READ - performed by only the browser
router.get('/:id', authMiddleware, getProjectById) //READ
router.post('/',authMiddleware, createProject) // CREATE
router.put('/:id',authMiddleware, updateProjectById)//UPDATE
router.delete('/:id',authMiddleware, deleteProjectById) //DELETE
router.delete('/',authMiddleware, deleteAllProjects) //DELETE ALL


export default router;