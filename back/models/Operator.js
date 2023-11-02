import mongoose from "mongoose";

const Schema = mongoose.Schema 

const OperatorSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }
})

export default mongoose.model("Operator", OperatorSchema)