import mongoose from "mongoose";

const Schema = mongoose.Schema 

const OperatorSchema = new Schema({
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
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
})

export default mongoose.model("Operator", OperatorSchema)