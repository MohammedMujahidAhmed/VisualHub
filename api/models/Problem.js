import mongoose from "mongoose";
const {Schema} = mongoose;

const ProblemSchema = new Schema({

    link:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
    }

});

const Problem = mongoose.model('Problem',ProblemSchema);
export { Problem };