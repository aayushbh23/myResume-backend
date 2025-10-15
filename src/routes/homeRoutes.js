import { Router } from 'express';
import { listHome, createHome, getHome, updateHome, deleteHome } from '../controllers/homeController.js';
import { createHomeRules, updateHomeRules } from '../validators/homeValidators.js';


const router = Router();


router.get('/', listHome);
router.post('/', createHomeRules, createHome);
router.get('/:id', getHome);
router.put('/:id', updateHomeRules, updateHome);
router.delete('/:id', deleteHome);


export default router;
