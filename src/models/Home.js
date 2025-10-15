import mongoose from 'mongoose';


const HomeSchema = new mongoose.Schema(
{
    name: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    location: { type: String, required: true },
    profileURL: { type: String, required: true },
    links: {
        email: String,
        github: String,
        website: String
    }
},
    { timestamps: true }
);


export default mongoose.model('Home', HomeSchema);
