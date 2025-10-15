import Home from '../models/Home.js';
import { validationResult } from 'express-validator';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { buildQueryOptions } from '../utils/buildQueryOptions.js';


export const listHome = asyncHandler(async (req, res) => {
    const { sort, skip, limit, page } = buildQueryOptions(req);
    const [items, total] = await Promise.all([
        Home.find().sort(sort).skip(skip).limit(limit),
        Home.countDocuments()
    ]);
    res.json({
        success: true,
        data: items,
        page,
        total
    });
});


export const createHome = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false, errors: errors.array()
    });
    const created = await Home.create(req.body);
    res.status(201).json({
        success: true,
        data: created
    });
});


export const getHome = asyncHandler(async (req, res) => {
    const doc = await Home.findById(req.params.id);
    if (!doc) return res.status(404).json({
        success: false,
        error: 'Home not found'
    });
    res.json({
        success: true,
        data: doc
    });
});


export const updateHome = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        success: false,
        errors: errors.array()
    });
    const updated = await Home.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!updated) return res.status(404).json({
        success: false,
        error: 'Home not found'
    });
    res.json({
        success: true,
        data: updated
    });
});


export const deleteHome = asyncHandler(async (req, res) => {
    const deleted = await Home.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
        success: false,
        error: 'Home not found'
    });
    res.status(204).send();
});
