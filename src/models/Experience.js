import mongoose from 'mongoose';


const ExperienceSchema = new mongoose.Schema(
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    company: { type: String, required: true },
    role: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    companyURL: { type: String, required: true },
    highlights: { type: [String], required: true, default: [] }
},
    { timestamps: true }
);


export default mongoose.model('Experience', ExperienceSchema, 'experience');
