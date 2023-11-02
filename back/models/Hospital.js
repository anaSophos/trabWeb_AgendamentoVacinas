import mongoose from "mongoose";

const Schema = mongoose.Schema

const hospSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    operators:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Operator',
        default: []
    }]
})


export default mongoose.model("Hospital", hospSchema)