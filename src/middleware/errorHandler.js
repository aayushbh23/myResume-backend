// Centralized error handler
export function errorHandler (err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';


    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error(err);
    }


    res.status(status).json({
        success: false,
        error: message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    });
}
