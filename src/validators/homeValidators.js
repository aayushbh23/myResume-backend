import { body } from 'express-validator';

export const createHomeRules = [
    body('name').isString().notEmpty(),
    body('title').isString().notEmpty(),
    body('summary').isString().notEmpty(),
    body('location').isString().notEmpty(),
    body('profileURL').isString().notEmpty(),
    body('links.email').optional().isEmail(),
    body('links.github').optional().isURL(),
    body('links.website').optional().isURL()
];

export const updateHomeRules = [
    body('name').isString().notEmpty(),
    body('title').isString().notEmpty(),
    body('summary').isString().notEmpty(),
    body('location').isString().notEmpty(),
    body('profileURL').isString().notEmpty(),
    body('links.email').optional().isEmail(),
    body('links.github').optional().isURL(),
    body('links.website').optional().isURL()
];
