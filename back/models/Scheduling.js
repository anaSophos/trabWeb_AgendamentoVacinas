import mongoose from "mongoose";

const Schema = mongoose.Schema //classe

const shcSchema = new Schema({
    idVac:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vaccine",
        required: true
    },
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        required: true
    },
})

export default mongoose.model("Scheduling", shcSchema)