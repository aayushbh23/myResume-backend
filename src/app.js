import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import skillsRoutes from "./routes/skillsRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

app.use(
  morgan(process.env.NODE_ENV === "production" ? "combined" : "dev")
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));

const parseOrigins = (val) =>
  (val || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const allowedOrigins = parseOrigins(process.env.CORS_ORIGIN);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/skills", skillsRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
