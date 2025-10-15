import { body } from 'express-validator';


export const createExperienceRules = [
    body('company').isString().notEmpty(),
    body('role').isString().notEmpty(),
    body('start').isString().notEmpty(),
    body('end').isString().notEmpty(),
    body('companyURL').isURL().notEmpty(),
    body('highlights').isArray().notEmpty()
];


export const updateExperienceRules = [
    body('company').isString().notEmpty(),
    body('role').isString().notEmpty(),
    body('start').isString().notEmpty(),
    body('end').isString().notEmpty(),
    body('companyURL').isURL().notEmpty(),
    body('highlights').isArray().notEmpty()
];
