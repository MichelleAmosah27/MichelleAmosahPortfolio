
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


// PUBLIC ROUTES (no login required)
router.get('/', getAllProjects); 
router.get('/:id', getProjectById);

// ADMIN ROUTES (login required)
router.post('/', authMiddleware(true), createProject);
router.put('/:id', authMiddleware(true), updateProjectById);
router.delete('/:id', authMiddleware(true), deleteProjectById);
router.delete('/', authMiddleware(true), deleteAllProjects);

export default router;