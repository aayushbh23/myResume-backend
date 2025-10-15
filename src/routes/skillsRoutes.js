import { Router } from 'express';
import { listSkills, createSkills, getSkills, updateSkills, deleteSkills } from '../controllers/skillsController.js';
import { createSkillsRules, updateSkillsRules } from '../validators/skillsValidators.js';


const router = Router();


router.get('/', listSkills);
router.post('/', createSkillsRules, createSkills);
router.get('/:id', getSkills);
router.put('/:id', updateSkillsRules, updateSkills);
router.delete('/:id', deleteSkills);


export default router;
