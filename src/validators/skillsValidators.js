import { body } from 'express-validator';


export const createSkillsRules = [
    body('name').isString().notEmpty(),
    body('rating').isInt().notEmpty()
];


export const updateSkillsRules = [
    body('name').isString().notEmpty(),
    body('rating').isInt().notEmpty()
];
