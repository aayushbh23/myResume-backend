export function buildQueryOptions (req) {
    const page = Math.max(parseInt(req.query.page || '1', 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || '20', 10), 1), 100);
    const sort = req.query.sort || '-createdAt';
    const skip = (page - 1) * limit;
    return { page, limit, sort, skip };
}
