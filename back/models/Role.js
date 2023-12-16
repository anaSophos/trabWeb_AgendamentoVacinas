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
   /* permissions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission',
        default: []
    }]*/
})

export default mongoose.model("Role", roleSchema)