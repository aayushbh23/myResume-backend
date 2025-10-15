import { Router } from 'express';
import { listExperience, createExperience, getExperience, updateExperience, deleteExperience } from '../controllers/experienceController.js';
import { createExperienceRules, updateExperienceRules } from '../validators/experienceValidators.js';


const router = Router();


router.get('/', listExperience);
router.post('/', createExperienceRules, createExperience);
router.get('/:id', getExperience);
router.put('/:id', updateExperienceRules, updateExperience);
router.delete('/:id', deleteExperience);


export default router;
