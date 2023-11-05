import mongoose from "mongoose";

const Schema = mongoose.Schema //classe

const roleSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
})

export default mongoose.model("Role", roleSchema)