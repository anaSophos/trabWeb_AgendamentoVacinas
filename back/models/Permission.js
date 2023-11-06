import mongoose from "mongoose";

const Schema = mongoose.Schema //classe

const permissionSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
})

export default mongoose.model("Permission", permissionSchema)