import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    token:{
        type:String
    },
    problem:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Problem'
        }
    ],
    chat:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Chat'
        }
    ],
    Alg:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Alg'
        },
});

const User = mongoose.model('User',UserSchema);

export { User };