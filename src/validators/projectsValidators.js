import { body } from 'express-validator';


export const createProjectsRules = [
    body('name').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('tech').isArray().notEmpty(),
    body('imageURL').isString().notEmpty(),
    body('projectURL').isURL().notEmpty()
];


export const updateProjectsRules = [
    body('name').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('tech').isArray().notEmpty(),
    body('imageURL').isString().notEmpty(),
    body('projectURL').isURL().notEmpty()
];
