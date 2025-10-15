import { body } from 'express-validator';


export const createEducationRules = [
    body('school').isString().notEmpty(),
    body('degree').isString().notEmpty(),
    body('year').isString().notEmpty()
];


export const updateEducationRules = [
    body('school').isString().notEmpty(),
    body('degree').isString().notEmpty(),
    body('year').isString().notEmpty()
];
