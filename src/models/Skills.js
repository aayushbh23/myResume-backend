import mongoose from 'mongoose';


const SkillsSchema = new mongoose.Schema(
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true }
},
    { timestamps: true }
);


export default mongoose.model('Skills', SkillsSchema);
