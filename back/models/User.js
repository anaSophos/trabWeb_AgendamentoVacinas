import mongoose from "mongoose";

const Schema = mongoose.Schema //classe

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rg:{
        type: Number,
        required: true
    },
    cpf:{
        type: Number,
        required: true
    },
    phoneNum:{
        type: String,
        required: true
    },
    birth:{
        type: Date,
        required: true
    },
    role:{
        type: String,
        default: 'User',
    }
})

export default mongoose.model("User", userSchema)