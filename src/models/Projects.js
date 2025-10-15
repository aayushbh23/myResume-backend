import mongoose from 'mongoose';


const ProjectsSchema = new mongoose.Schema(
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: [String], required: true , default: []},
    imageURL: { type: String, required: true },
    projectURL: { type: String, required: true }
},
    { timestamps: true }
);


export default mongoose.model('Projects', ProjectsSchema, 'projects');
