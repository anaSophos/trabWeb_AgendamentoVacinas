import mongoose from "mongoose";

const Schema = mongoose.Schema //classe

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} não é um e-mail válido!`
        }
      },
    password: {
        type: String,
        required: true
    },
    rg:{
        type: Number,
        required: true,
    },
    cpf:{
        type: Number,
        required: true,
    },
    phoneNum:{
        type: String,
        required: true
    },
    birth:{
        type: Date,
        required: true
    },
   /* role:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required:true
    },*/

})

export default mongoose.model("User", userSchema)