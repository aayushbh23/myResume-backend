import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

(async () => {
try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
        console.log(`myResume API listening on http://localhost:${PORT}`);
    });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
}
})();
