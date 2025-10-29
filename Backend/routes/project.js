
import express from "express";

import{
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    deleteAllProjects
} from "../controllers/project.js";

//wire in express
const router = express.Router();

//REST API
router.get('/', getAllProjects) //READ - performed by only the browser
router.get('/:id', getProjectById) //READ
router.post('/', createProject) // CREATE
router.put('/:id', updateProjectById)//UPDATE
router.delete('/:id', deleteProjectById) //DELETE
router.delete('/', deleteAllProjects) //DELETE ALL


export default router;