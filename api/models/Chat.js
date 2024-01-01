//Chat.js
import mongoose from "mongoose";
const {Schema} = mongoose;

const ChatSchema = new Schema({

    link:{
        type:String,
        required:true,
    },
    text:{
        type:String,
    }

});

const Chat = mongoose.model('Chat',ChatSchema);
export { Chat };


