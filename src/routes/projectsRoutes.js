import { Router } from 'express';
import { listProjects, createProjects, getProjects, updateProjects, deleteProjects } from '../controllers/projectsController.js';
import { createProjectsRules, updateProjectsRules } from '../validators/projectsValidators.js';


const router = Router();


router.get('/', listProjects);
router.post('/', createProjectsRules, createProjects);
router.get('/:id', getProjects);
router.put('/:id', updateProjectsRules, updateProjects);
router.delete('/:id', deleteProjects);


export default router;
