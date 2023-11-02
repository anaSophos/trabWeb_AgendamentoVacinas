import mongoose from "mongoose";

const Schema = mongoose.Schema 

const vaccineSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    qty:{
        type: Number,
        required: true
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required:true
    }
})

export default mongoose.model("Vaccine", vaccineSchema)