import Experience from '../models/Experience.js';
import { validationResult } from 'express-validator';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { buildQueryOptions } from '../utils/buildQueryOptions.js';


export const listExperience = asyncHandler(async (req, res) => {
    const { sort, skip, limit, page } = buildQueryOptions(req);
    const [items, total] = await Promise.all([
        Experience.find().sort(sort).skip(skip).limit(limit),
        Experience.countDocuments()
    ]);
    res.json({
        success: true,
        data: items,
        page,
        total
    });
});


export const createExperience = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false, errors: errors.array()
    });
    const created = await Experience.create(req.body);
    res.status(201).json({
        success: true,
        data: created
    });
});


export const getExperience = asyncHandler(async (req, res) => {
    const doc = await Experience.findById(req.params.id);
    if (!doc) return res.status(404).json({
        success: false,
        error: 'Experience not found'
    });
    res.json({
        success: true,
        data: doc
    });
});


export const updateExperience = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false,
        errors: errors.array()
    });
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!updated) return res.status(404).json({
        success: false,
        error: 'Experience not found'
    });
    res.json({
        success: true,
        data: updated
    });
});


export const deleteExperience = asyncHandler(async (req, res) => {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
        success: false,
        error: 'Experience not found'
    });
    res.status(204).send();
});
