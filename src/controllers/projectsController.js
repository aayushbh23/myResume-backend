import Projects from '../models/Projects.js';
import { validationResult } from 'express-validator';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { buildQueryOptions } from '../utils/buildQueryOptions.js';


export const listProjects = asyncHandler(async (req, res) => {
    const { sort, skip, limit, page } = buildQueryOptions(req);
    const [items, total] = await Promise.all([
        Projects.find().sort(sort).skip(skip).limit(limit),
        Projects.countDocuments()
    ]);
    res.json({
        success: true,
        data: items,
        page,
        total
    });
});


export const createProjects = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false, errors: errors.array()
    });
    const created = await Projects.create(req.body);
    res.status(201).json({
        success: true,
        data: created
    });
});


export const getProjects = asyncHandler(async (req, res) => {
    const doc = await Projects.findById(req.params.id);
    if (!doc) return res.status(404).json({
        success: false,
        error: 'Projects not found'
    });
    res.json({
        success: true,
        data: doc
    });
});


export const updateProjects = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false,
        errors: errors.array()
    });
    const updated = await Projects.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!updated) return res.status(404).json({
        success: false,
        error: 'Projects not found'
    });
    res.json({
        success: true,
        data: updated
    });
});


export const deleteProjects = asyncHandler(async (req, res) => {
    const deleted = await Projects.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
        success: false,
        error: 'Projects not found'
    });
    res.status(204).send();
});
