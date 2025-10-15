import { Router } from 'express';
import { listEducation, createEducation, getEducation, updateEducation, deleteEducation } from '../controllers/educationController.js';
import { createEducationRules, updateEducationRules } from '../validators/educationValidators.js';


const router = Router();


router.get('/', listEducation);
router.post('/', createEducationRules, createEducation);
router.get('/:id', getEducation);
router.put('/:id', updateEducationRules, updateEducation);
router.delete('/:id', deleteEducation);


export default router;
