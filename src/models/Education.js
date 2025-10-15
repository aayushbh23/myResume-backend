import mongoose from 'mongoose';


const EducationSchema = new mongoose.Schema(
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    school: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true }
},
    { timestamps: true }
);


export default mongoose.model('Education', EducationSchema);
