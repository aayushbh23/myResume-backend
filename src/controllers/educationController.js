import Education from '../models/Education.js';
import { validationResult } from 'express-validator';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { buildQueryOptions } from '../utils/buildQueryOptions.js';


export const listEducation = asyncHandler(async (req, res) => {
    const { sort, skip, limit, page } = buildQueryOptions(req);
    const [items, total] = await Promise.all([
        Education.find().sort(sort).skip(skip).limit(limit),
        Education.countDocuments()
    ]);
    res.json({
        success: true,
        data: items,
        page,
        total
    });
});


export const createEducation = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false, errors: errors.array()
    });
    const created = await Education.create(req.body);
    res.status(201).json({
        success: true,
        data: created
    });
});


export const getEducation = asyncHandler(async (req, res) => {
    const doc = await Education.findById(req.params.id);
    if (!doc) return res.status(404).json({
        success: false,
        error: 'Education not found'
    });
    res.json({
        success: true,
        data: doc
    });
});


export const updateEducation = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false,
        errors: errors.array()
    });
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!updated) return res.status(404).json({
        success: false,
        error: 'Education not found'
    });
    res.json({
        success: true,
        data: updated
    });
});


export const deleteEducation = asyncHandler(async (req, res) => {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
        success: false,
        error: 'Education not found'
    });
    res.status(204).send();
});
