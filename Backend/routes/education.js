
import express from "express";

import{
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducationById,
    deleteEducationById,
    deleteAllEducation
} from "../controllers/education.js"

//wire in express
const router = express.Router();

//REST API
router.get('/', getAllEducation) //READ - performed by only the browser
router.get('/:id', getEducationById) //READ
router.post('/', createEducation) // CREATE
router.put('/:id', updateEducationById)//UPDATE
router.delete('/:id', deleteEducationById) //DELETE
router.delete('/', deleteAllEducation)

export default router;

